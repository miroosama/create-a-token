const DEFAULT_STATE = {
  token: null,
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'CREATE_TOKEN':
      return { ...state, token: action.data };
    default:
      return { ...state };
  }
};

export default rootReducer;
