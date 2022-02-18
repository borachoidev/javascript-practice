const $items = document.querySelector('.items')
const $imageButton = document.querySelectorAll('.img-btn')
const $colorButton = document.querySelectorAll('.color-btn')

async function loadItems() {
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

const displayItems = async () => {
  const { items } = await loadItems()
  $items.innerHTML = items.map((item) => createHTMLString(item)).join('')
}

displayItems()

$imageButton.forEach((button) =>
  button.addEventListener('click', async () => {
    const { items } = await fetchItems()
    let filtered
    if (button.dataset.type === 'tshirt') {
      filtered = items.filter((item) => item.type === 'tshirt')
    } else if (button.dataset.type === 'pants') {
      filtered = items.filter((item) => item.type === 'pants')
    } else {
      filtered = items.filter((item) => item.type === 'skirt')
    }

    $items.innerHTML = filtered.map((item) => createHTMLString(item.image, item.gender, item.size)).join('')
  })
)

$colorButton.forEach((button) =>
  button.addEventListener('click', async () => {
    const { items } = await fetchItems()
    let filtered
    if (button.dataset.value === 'blue') {
      filtered = items.filter((item) => item.color === 'blue')
    } else if (button.dataset.value === 'pink') {
      filtered = items.filter((item) => item.color === 'pink')
    } else {
      filtered = items.filter((item) => item.color === 'yellow')
    }

    $items.innerHTML = iltered.map((item) => createHTMLString(item.image, item.gender, item.size)).join('')
  })
)
