console.log('result')
export default function SearchResult({ target, initialState, onClick }) {
  this.state = initialState
  this.onClick = onClick

  const searchResult = document.createElement('section')
  searchResult.classList = 'searchList'
  target.appendChild(searchResult)

  this.setState = nextState => {
    if (JSON.stringify(this.state) === JSON.stringify(nextState)) return
    this.state = nextState
    this.render()
  }

  this.render = () => {
    console.log(this.state)
    if (!this.state.length) {
      console.log('sdfsdf')
      searchResult.innerHTML = `
        <section class="searchResult__null" >
          <img src="./assets/null.gif" />
          <p class="searchResult__null__content">검색 결과가 없습니다 ━</p>
        </section>
        `
    } else {
      searchResult.innerHTML = `
      <ul class="searchResult__container">
       ${this.state
         .map(
           result => ` <li class="searchResult__item" data-id="${result.id}" data-name="${result.name}">
                          <img src="${result.url}"/>
                        </li>`
         )
         .join('')}
      </ul>
      `
    }
  }

  searchResult.addEventListener('click', event => {
    const item = event.target.closest('.searchResult__item')
    if (!item) return
    const { id } = item.dataset
    this.onClick(id)
  })
}
