export const addTokenToRequestHeader = () => {
  let token = 'temp';
  try {
    token = localStorage.getItem('token');
  } catch {
    console.log('Cannot read token');
  }
  console.log(token);

  let headers = {
    Authorization: `Bearer ${token}`,
  };

  return headers;
};
