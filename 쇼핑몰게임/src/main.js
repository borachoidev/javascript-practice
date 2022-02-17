const $itemList = document.querySelector('.item-list')

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
