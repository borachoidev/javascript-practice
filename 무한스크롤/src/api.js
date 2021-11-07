const API_END_POINT = '';

export const request = (async = url => {
  const response = await fetch(`${API_END_POINT}${url}`);

  if (response.ok) {
    return response.json();
  }
});
