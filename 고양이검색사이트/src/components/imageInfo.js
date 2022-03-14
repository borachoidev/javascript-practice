export default function ImageInfo({ target, initialState, onClose }) {
  this.state = initialState
  this.onClose = onClose

  const imageInfo = document.createElement('div')
  imageInfo.classList = 'modal image-info'
  imageInfo.style.display = 'none'
  target.appendChild(imageInfo)

  this.setState = nextState => {
    if (JSON.stringify(this.state) === JSON.stringify(nextState)) return
    this.state = nextState
    this.render()
  }

  this.render = () => {
    if (this.state.detail) {
      const { origin, url, name, temperament } = this.state.detail

      imageInfo.innerHTML = `  <div class="modal image-info">
    <div class="image-info__content">
      <header class="image-info__header">
        <span class="image-info__title">${name}</span>
        <button type="button" class="image-info__close">X</button>
      </header>
      <img
        src="${url}"
        alt="${name}"
        class="image-info__image"
      />
      <div class="image-info__description">
        <p>성격 : ${temperament}</p>
        <p>태생 : ${origin}</p>
      </div>
    </div>
  </div>
  `
    }

    imageInfo.style.display = this.state.popUpVisible ? 'block' : 'none'

    const closeBtn = imageInfo.querySelector('.image-info__close')
    this.state.popUpVisible &&
      closeBtn.addEventListener('click', () => {
        this.onClose()
      })
  }

  imageInfo.addEventListener('click', () => {
    this.onClose()
  })
}
