const $items = document.querySelector('.items')
const $imageButton = document.querySelectorAll('.img-btn')
const $colorButton = document.querySelectorAll('.color-btn')

async function fetchItems() {
  try {
    const response = await fetch('../data/data.json')
    return response.json()
  } catch (e) {
    console.error(e)
  }
}

const renderItem = (image, gender, size) => {
  return ` <li class='item'><img src="../public/images/${image}" class="item-thumnail" /><span class="item-tag">${gender}</span><span class="item-tag">${size}</span></li>`
}

const getAllItems = async () => {
  const { items } = await fetchItems()
  console.log(items)

  $items.innerHTML = `
    ${items.map((item) => renderItem(item.image, item.gender, item.size)).join('')}
  `
}

getAllItems()

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

    $items.innerHTML = `
    ${filtered.map((item) => renderItem(item.image, item.gender, item.size)).join('')}
  `
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

    $items.innerHTML = `
    ${filtered.map((item) => renderItem(item.image, item.gender, item.size)).join('')}
  `
  })
)
