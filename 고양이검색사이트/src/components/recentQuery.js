export default function RecentQuery({ target, initialState }) {
  this.state = initialState

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
    <ul class="recent-query__list">
      <li class="recent-query__item">검색어</li>
      <li class="recent-query__item">검색어</li>
      <li class="recent-query__item">검색어</li>
    </ul>
    `
  }

  this.render()
}
