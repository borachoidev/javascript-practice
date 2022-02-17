export default function Input({ $target, initialState, onSearch }) {
  this.state = initialState
  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState }
    this.render()
  }

  const $input = document.createElement('input')
  this.render = () => {
    $target.appendChild($input)
  }

  this.render()
  $input.addEventListener('input', (e) => {
    let query = e.target.value
    onSearch(query)
  })
}
