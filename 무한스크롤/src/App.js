import Header from './components/Header.js'
import Input from './components/Input.js'

export default function App($target) {
  new Header({ $target })
  new Input({ $target })
}
