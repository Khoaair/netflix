const MoviesReduer = (state, action) => {
  if (action.type === 'GET_MOVIES_START') {
    return { ...state, isFeching: true };
  }
  if (action.type === 'GET_MOVIES_SUCCESS') {
    return { ...state, isFeching: false, movies: action.payload };
  }
  if (action.type === 'GET_MOVIES_FAILURE') {
    return { ...state };
  }
  if (action.type === 'DELETE_MOVIE_START') {
    return { ...state, isFeching: true };
  }
  if (action.type === 'DELETE_MOVIE_SUCCESS') {
    return {
      ...state,
      isFeching: false,
      movies: state.movies.filter(movie => movie._id !== action.payload),
    };
  }
  if (action.type === 'DELETE_MOVIE_FAILURE') {
    return { ...state, error: true };
  }
  return state;
};

export default MoviesReduer;
