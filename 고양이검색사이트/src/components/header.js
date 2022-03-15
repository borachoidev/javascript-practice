import RandomButton from './randomButton.js'
import SearchInput from './searchInput.js'
import RecentQuery from './recentQuery.js'

console.log('header')

export default function Headers({
  target,
  initialState,
  onSearch,
  onClickRandom,
}) {
  const header = document.createElement('header')
  header.classList = 'header'
  const headerSearch = document.createElement('section')
  headerSearch.classList = 'header__search'
  header.appendChild(headerSearch)
  this.recentQuery = new RecentQuery({ target: header, initialState, onSearch })
  new SearchInput({ target: headerSearch, onSearch })
  new RandomButton({ target: headerSearch, onClickRandom })

  target.appendChild(header)
}
