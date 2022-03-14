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
  }

  const loading = new Loading({ target, initialState: this.state.loading })

  new Headers({
    target,
    onSearch: async query => {
      try {
        this.setState({ ...this.state, loading: true })
        const { data } = await api.searchCats(query)
        console.log(data)
        this.setState({ ...this.state, result: data })
      } catch (error) {
        console.log(
          '%c        ',
          `font-size:360px; background:url(${error.data}) no-repeat; background-size:100% `
        )
        console.error(`Error: ${error.message}`)
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
        console.log(
          '%c        ',
          `font-size:360px; background:url(${error.data}) no-repeat; background-size:100% `
        )
        console.error(`Error: ${error.message}`)
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
  }

  document.addEventListener('keydown', event => {
    if (!this.state.popUpVisible) return

    if (event.key === 'Escape') {
      this.setState({ ...this.state, popUpVisible: false })
    }
  })
}
