import { request } from './api.js'
import Header from './components/Header.js'
import Input from './components/Input.js'

export default function App($target, initialState) {
  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
  }

  new Header({ $target })
  new Input({
    $target,
    initialState: {
      query: '',
      page: 1,
    },
    onSearch: async (query, page) => {
      const data = await searchPhotos(query, page)
      this.setState({ ...this.state, data: [...data.results] })
      console.log(data)
    },
  })

  const searchPhotos = async (query, page = 1) => {
    try {
      const data = await request(`/search/photos?query=${query}&page=${page}`)
      return data
    } catch (error) {
      console.error(error)
    }
  }
}
