const loadItems = async () => {
  try {
    const response = await fetch('../data/data.json')
    return response.json()
  } catch (e) {
    console.error(e)
  }
}

const createHTMLString = (item) => {
  return `
    <li class='item'>
      <img src="../public/images/${item.image}" class="item-thumnail" alt =${item.type} />
      <span class="item-tag">${item.gender}</span>
      <span class="item-tag">${item.size}</span>
    </li>
  `
}

const displayItems = (items) => {
  const container = document.querySelector('.items')
  container.innerHTML = items.map((item) => createHTMLString(item)).join('')
}

const setEventListeners = (items) => {
  const logo = document.querySelector('.logo')
  const buttons = document.querySelector('.buttons')
  logo.addEventListener('click', () => displayItems(items))
  buttons.addEventListener('click', (event) => onButtonClick(event, items))
}

const onButtonClick = (event, items) => {
  const dataset = event.target.dataset
  const key = dataset.key
  const value = dataset.value
  if (key == null || value == null) return

  const filtered = items.filter((item) => item[key] === value)
  displayItems(filtered)
}

loadItems()
  .then((response) => {
    displayItems(response.items)
    setEventListeners(response.items)
  })
  .catch(console.log)
