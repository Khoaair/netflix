const UsersReducer = (state, action) => {
  if (action.type === 'GET_USERS_START') {
    return { ...state, isFetching: true };
  }
  if (action.type === 'GET_USERS_SUCCESS') {
    return { ...state, isFetching: false, users: action.payload };
  }
  if (action.type === 'GET_USERS_FAILURE') {
    return { ...state };
  }
  if (action.type === 'DELETE_USER_START') {
    return { ...state, isFetching: true };
  }
  if (action.type === 'DELETE_USER_SUCCESS') {
    return {
      ...state,
      isFetching: false,
      users: state.users.filter(user => user._id !== action.payload),
    };
  }
  if (action.type === 'DELETE_USER_FAILURE') {
    return { ...state };
  }
};

export default UsersReducer;
