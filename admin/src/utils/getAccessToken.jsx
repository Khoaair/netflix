export const getAccessToken = () => {
  const user = localStorage.getItem('user');
  if (user) {
    const result = JSON.parse(user);
    if (result && result.accessToken) {
      return `Bearer ${result.accessToken}`;
    }
  }
  return '';
};
