const authReducer = (state, action) => {
  if (action.type === 'LOGIN_START') {
    return {
      ...state,
      isFetching: true,
    };
  }
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === 'LOGIN_FAILURE') {
    return {
      ...state,
      error: true,
    };
  }
};

export default authReducer;
