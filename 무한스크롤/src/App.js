import { request } from './api.js'
import Header from './components/Header.js'
import Input from './components/Input.js'

export default function App($target) {
  new Header({ $target })
  new Input({ $target })

  const searchPhotos = async (query, page = 1) => {
    try {
      const data = await request(`/search/photos?query=${query}&page=${page}`)
    } catch (error) {
      console.error(error)
    }
  }
}
