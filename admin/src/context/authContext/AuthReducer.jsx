const authReducer = (state, action) => {
  if (action.type === 'LOGIN_START') {
    return {
      user: null,
      isFetching: true,
      error: false,
    };
  }
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      user: action.payload,
      isFetching: false,
      error: false,
    };
  }
  if (action.type === 'LOGIN_FAILURE') {
    return {
      user: null,
      isFetching: false,
      error: true,
    };
  }
};

export default authReducer;
