const API_ENDPOINT =
  'https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev/api'
const request = async url => {
  try {
    const response = await fetch(`${API_ENDPOINT}${url}`)
    if (response.ok) {
      return response.json()
    } else {
      if (response.status === 400) {
        return Promise.reject({
          message: '잘못된 요청입니다',
          data: `https://http.cat/${response.status}`,
        })
      } else if (response.status === 404) {
        return Promise.reject({
          message: '존재하지 않는 요청입니다',
          data: `https://http.cat/${response.status}`,
        })
      } else {
        return Promise.reject({
          message: '알 수 없는 오류. 잠시후 다시 시도해주세요.',
          data: `https://http.cat/${response.status}`,
        })
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const api = {
  searchCats: query => {
    return request(`/cats/search?q=${query}`)
  },
  fetchDetail: id => {
    return request(`/cats/${id}`)
  },
}
