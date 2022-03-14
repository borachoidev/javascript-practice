console.log('header')

export default function Headers({ target, onSearch }) {
  this.onSearch = onSearch
  const header = document.createElement('header')
  header.classList = 'header'
  const searchInput = document.createElement('input')
  searchInput.placeholder = '고양이를 검색하세요. |'
  searchInput.classList = 'header__search-input'

  const randomBtn = document.createElement('button')
  randomBtn.classList = 'header__random-btn'

  header.appendChild(searchInput)
  header.appendChild(randomBtn)
  target.appendChild(header)

  searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      this.onSearch(event.target.value)
    }
  })
}
