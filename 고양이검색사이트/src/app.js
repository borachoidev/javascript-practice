import { api } from './api/index.js'
import Headers from './components/header.js'
import Loading from './components/loading.js'
import SearchResult from './components/searchResult.js'

console.log('app')
export default function App(target) {
  this.state = {
    result: [],
    loading: false,
  }

  const loading = new Loading({ target, initialState: this.state.loading })

  new Headers({
    target,
    onSearch: async query => {
      try {
        this.setState({ ...this.state, loading: true })
        const { data } = await api.searchCats(query)
        this.setState({ ...this.state, result: data })
        console.log(data)
      } catch (error) {
        console.log(error)
      } finally {
        this.setState({ ...this.state, loading: false })
      }
    },
  })

  const searchResult = new SearchResult({
    target,
    initialState: this.state.result,
  })

  this.setState = nextState => {
    this.state = nextState
    searchResult.setState(this.state.result)
    loading.setState(this.state.loading)
  }
}
