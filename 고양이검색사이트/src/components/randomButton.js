export default function RandomButton({ target }) {
  const randomBtn = document.createElement('button')
  randomBtn.classList = 'header__random-btn'
  target.appendChild(randomBtn)
}
