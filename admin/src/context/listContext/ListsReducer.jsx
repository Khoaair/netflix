const ListsReducer = (state, action) => {
  if (action.type === 'GET_LISTS_START') {
    return { ...state, isFeching: true };
  }
  if (action.type === 'GET_LISTS_SUCCESS') {
    return { ...state, isFeching: false, lists: action.payload };
  }
  if (action.type === 'GET_LISTS_FAILURE') {
    return { ...state };
  }
  // if (action.type === 'CREATE_MOVIE_START') {
  //   return { ...state, isFeching: true };
  // }
  // if (action.type === 'CREATE_MOVIE_SUCCESS') {
  //   return {
  //     ...state,
  //     isFeching: false,
  //     movies: [...state.movies, action.payload],
  //   };
  // }
  // if (action.type === 'CREATE_MOVIE_FAILURE') {
  //   return { ...state };
  // }
  // if (action.type === 'UPDATE_MOVIE_START') {
  //   return { ...state, isFeching: true };
  // }
  // if (action.type === 'UPDATE_MOVIE_SUCCESS') {
  //   return {
  //     ...state,
  //     isFeching: false,
  //     movies: state.movies.map(
  //       movie => movie._id === action.payload._id && action.payload
  //     ),
  //   };
  // }
  // if (action.type === 'UPDATE_MOVIE_FAILURE') {
  //   return { ...state };
  // }
  if (action.type === 'DELETE_LIST_START') {
    return { ...state, isFeching: true };
  }
  if (action.type === 'DELETE_LIST_SUCCESS') {
    return {
      ...state,
      isFeching: false,
      lists: state.lists.filter(list => list._id !== action.payload),
    };
  }
  if (action.type === 'DELETE_LIST_FAILURE') {
    return { ...state, error: true };
  }
  return state;
};

export default ListsReducer;
