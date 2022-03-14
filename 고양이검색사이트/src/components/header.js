import RandomButton from './randomButton.js'
import SearchInput from './searchInput.js'
import RecentQuery from './recentQuery.js'

console.log('header')

export default function Headers({ target, onSearch }) {
  this.onSearch = onSearch
  const header = document.createElement('header')
  header.classList = 'header'
  const headerSearch = document.createElement('section')
  headerSearch.classList = 'header__search'
  header.appendChild(headerSearch)
  new RecentQuery({ target: header })
  new SearchInput({ target: headerSearch, onSearch })
  new RandomButton({ target: headerSearch })

  target.appendChild(header)
}
