const API_ENDPOINT =
  'https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev/api'
const request = async url => {
  try {
    const response = await fetch(`${API_ENDPOINT}${url}`)
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject({
        status: response.status,
        data: `https://http.cat/${response.status}`,
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const api = {
  searchCats: query => {
    return request(`/cats/search?q=${query}`)
  },
}
