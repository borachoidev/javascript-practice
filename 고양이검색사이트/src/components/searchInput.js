export default function SearchInput({ target, onSearch }) {
  this.onSearch = onSearch
  const searchInput = document.createElement('input')
  searchInput.placeholder = '고양이를 검색하세요. |'
  searchInput.classList = 'header__search-input'
  searchInput.setAttribute('autofocus', true)

  target.appendChild(searchInput)

  searchInput.addEventListener('keydown', event => {
    if (event.target.value === '') return
    if (event.key === 'Enter') {
      this.onSearch(event.target.value)
    }
  })

  searchInput.addEventListener('click', event => {
    event.target.value = ''
  })
}
