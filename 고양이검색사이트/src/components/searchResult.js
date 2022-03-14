export default function SearchResult({ target, initialState }) {
  this.state = initialState

  const searchResult = document.createElement('section')
  searchResult.classList = 'searchList'
  target.appendChild(searchResult)

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    searchResult.innerHTML = `
    <ul class="searchResult__container">
     ${this.state
       .map(
         result => ` <li class="searchResult__item" data-id=${result.id}>
     <img src="${result.url}" />
   </li>`
       )
       .join('')}
    </ul>
    `
  }
}
