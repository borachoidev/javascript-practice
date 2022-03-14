export default function imageInfo({ target, initialState }) {
  this.state = initialState

  const imageInfo = document.createElement('div')
  imageInfo.classList = 'modal image-info'
  imageInfo.target.appendChild(target)

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    imageInfo.innerHTML = `  <div class="modal image-info">
    <div class="image-info__content">
      <header class="image-info__header">
        <span class="image-info__title">이름</span>
        <button type="button" class="image-info__close">X</button>
      </header>
      <img
        src="./assets/loading-meow.gif"
        alt="이름"
        class="image-info__image"
      />
      <div class="image-info__description">
        <p>성격:sdfsdf</p>
        <p>태생:sdfsdf</p>
      </div>
    </div>
  </div>
  `
  }
}
