export default function Header({ $target }) {
  const $header = document.createElement('header')

  $target.appendChild($header)
  this.render = () => {
    $header.innerHTML = `무한 스크롤 구현하기`
  }

  this.render()
}
