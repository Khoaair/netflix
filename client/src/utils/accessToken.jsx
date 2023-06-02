export const accessToken = `Bearer ${
  JSON.parse(localStorage.getItem('user'))?.accessToken
}`;
