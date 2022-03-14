console.log('loading')
export default function Loading({ target, initialState }) {
  this.state = initialState

  const loading = document.createElement('div')
  loading.classList = 'modal loading'
  loading.style.display = 'none'
  target.appendChild(loading)

  this.setState = nextState => {
    if (this.state === nextState) return
    this.state = nextState
    this.render()
  }

  this.render = () => {
    loading.innerHTML = `
    <div class="modal loading">
        <img src="./assets/loading-meow.gif" />
    </div>
    `
    loading.style.display = this.state ? 'block' : 'none'
  }
}
