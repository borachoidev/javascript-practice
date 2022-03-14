import RandomButton from './randomButton.js'
import SearchInput from './searchInput.js'

console.log('header')

export default function Headers({ target, onSearch }) {
  this.onSearch = onSearch
  const header = document.createElement('header')
  header.classList = 'header'

  new SearchInput({ target: header, onSearch })
  new RandomButton({ target: header })
  target.appendChild(header)
}
