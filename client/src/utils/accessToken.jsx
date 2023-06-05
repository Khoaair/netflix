// let accessToken = ''; // Initial declaration

// const user = localStorage.getItem('user');
// if (user) {
//   const parsedUser = JSON.parse(user);
//   if (parsedUser && parsedUser.accessToken) {
//     accessToken = `Bearer ${parsedUser.accessToken}`;
//   }
// }

// export { accessToken }; // Export the updated accessToken value

// export const getAccessToken = () => accessToken;

/*======================================================= */

// export const accessToken = `Bearer ${
//   JSON.parse(localStorage.getItem('user'))?.accessToken
// }`;

// let accessToken = ''; // Initial declaration

// const user = localStorage.getItem('user');
// if (user) {
//   const parsedUser = JSON.parse(user);
//   accessToken = parsedUser?.accessToken ?? ''; // Use the parsed accessToken or set a default value
// }

// export { accessToken }; // Export the accessToken value
/*======================================================= */
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
