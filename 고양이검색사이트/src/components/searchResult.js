console.log('result')
export default function SearchResult({ target, initialState, onClick }) {
  this.state = initialState
  this.onClick = onClick

  const searchResult = document.createElement('section')
  searchResult.classList = 'search-result'
  target.appendChild(searchResult)

  this.setState = nextState => {
    if (JSON.stringify(this.state) === JSON.stringify(nextState)) return
    this.state = nextState
    this.render()
  }

  this.render = () => {
    if (!this.state.length) {
      searchResult.innerHTML = `
        <section class="search-result__null" >
          <img src="./assets/null.gif" />
          <p class="search-result__null__content">검색 결과가 없습니다 ━</p>
        </section>
        `
    } else {
      searchResult.innerHTML = `
      <ul class="search-result__container">
       ${this.state
         .map(
           result => ` <li class="search-result__item" data-id="${result.id}" data-name="${result.name}">
                          <img src="${result.url}"/>
                        </li>`
         )
         .join('')}
      </ul>
      `
    }
  }

  searchResult.addEventListener('click', event => {
    const item = event.target.closest('.search-result__item')
    if (!item) return
    const { id } = item.dataset
    this.onClick(id)
  })
}
