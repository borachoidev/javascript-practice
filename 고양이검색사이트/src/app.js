import { api } from './api/index.js'
import Headers from './components/header.js'
import SearchResult from './components/searchResult.js'

console.log('app')
export default function App(target) {
  this.state = {
    result: [],
  }

  new Headers({
    target,
    onSearch: async query => {
      try {
        const { data } = await api.searchCats(query)
        this.setState({ ...this.state, result: data })
        console.log(data)
      } catch (error) {
        console.log(error)
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
  }
}
