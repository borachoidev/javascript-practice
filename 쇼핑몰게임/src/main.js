const $itemList = document.querySelector('.item-list')
const $imageButton = document.querySelectorAll('.img-btn')

async function fetchItems() {
  const response = await fetch('../data/data.json')
  return response.json()
}

const renderItem = (image, gender, size) => {
  return ` <li class='item'><img src="../public/images/${image}" class="item-image" /><span class="item-tag">${gender}</span><span class="item-tag">${size}</span></li>`
}

const getAllItems = async () => {
  const { items } = await fetchItems()
  console.log(items)

  $itemList.innerHTML = `
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

    $itemList.innerHTML = `
    ${filtered.map((item) => renderItem(item.image, item.gender, item.size)).join('')}
  `
  })
)
