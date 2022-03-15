import { api } from './api/index.js'
import Headers from './components/header.js'
import ImageInfo from './components/imageInfo.js'
import Loading from './components/loading.js'
import SearchResult from './components/searchResult.js'

console.log('app')
export default function App(target) {
  this.state = {
    result: null,
    loading: false,
    popUpVisible: false,
    detail: null,
    queries: [],
  }

  const loading = new Loading({ target, initialState: this.state.loading })

  const header = new Headers({
    target,
    initialState: this.state.queries,
    onSearch: async query => {
      try {
        let newQueries = [...this.state.queries]
        if (newQueries.includes(query)) {
          newQueries = newQueries.filter(_query => _query !== query)
        }
        if (newQueries.length >= 5) {
          newQueries = newQueries.slice(1)
        }
        newQueries.push(query)

        this.setState({ ...this.state, queries: newQueries, loading: true })
        const { data } = await api.searchCats(query)
        this.setState({ ...this.state, result: data })
      } catch (error) {
        this.handleError(error)
      } finally {
        this.setState({ ...this.state, loading: false })
      }
    },
  })

  const searchResult = new SearchResult({
    target,
    initialState: this.state.result,
    onClick: async id => {
      try {
        this.setState({ ...this.state, loading: true })
        const { data } = await api.fetchDetail(id)
        this.setState({ ...this.state, detail: data, popUpVisible: true })
      } catch (error) {
        this.handleError(error)
      } finally {
        this.setState({ ...this.state, loading: false })
      }
    },
  })

  const imageInfo = new ImageInfo({
    target,
    initialState: {
      popUpVisible: this.state.popUpVisible,
      detail: this.state.detail,
    },
    onClose: () => {
      this.setState({ ...this.state, popUpVisible: false })
    },
  })

  this.setState = nextState => {
    this.state = nextState
    searchResult.setState(this.state.result)
    loading.setState(this.state.loading)
    imageInfo.setState({
      popUpVisible: this.state.popUpVisible,
      detail: this.state.detail,
    })
    header.recentQuery.setState(this.state.queries)
  }

  document.addEventListener('keydown', event => {
    if (!this.state.popUpVisible) return

    if (event.key === 'Escape') {
      this.setState({ ...this.state, popUpVisible: false })
    }
  })

  this.handleError = error => {
    console.log(
      '%c        ',
      `font-size:360px; background:url(${error.url}) no-repeat; background-size:100% `
    )
    console.error(`Error: ${error.message}`)
  }
}
