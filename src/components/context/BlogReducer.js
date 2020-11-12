export default (state, action) => {
  switch (action.type) {
    case "GOT_DATA":
      return {
        ...state,
        blogPost: action.value,
      };
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
  }
};
