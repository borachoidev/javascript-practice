import Headers from './components/header.js'

console.log('app')
export default function App(target) {
  this.state = {}

  new Headers({ target })
  this.setState = nextState => {
    this.state = nextState
  }
}
