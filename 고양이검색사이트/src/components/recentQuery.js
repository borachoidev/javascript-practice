export default function RecentQuery({ target, initialState, onSearch }) {
  this.state = initialState
  this.onSearch = onSearch

  const recentQuery = document.createElement('section')
  recentQuery.classList = 'recent-query'
  target.appendChild(recentQuery)

  this.setState = nextState => {
    if (JSON.stringify(this.state) === JSON.stringify(nextState)) return
    this.state = nextState
    this.render()
  }

  this.render = () => {
    recentQuery.innerHTML = `
    <p>최근 검색어 </p>
    <ul class="recent-query__list">
    ${this.state
      .map(
        query =>
          `<li class="recent-query__item" data-query="${query}">${query}</li>`
      )
      .join('')}
  
    </ul>
    `
  }

  recentQuery.addEventListener('click', event => {
    const item = event.target.closest('.recent-query__item')
    if (!item) return
    const { query } = item.dataset
    this.onSearch(query)
  })

  this.render()
}
