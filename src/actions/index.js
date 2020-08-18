export function setCreatedToken(data) {
  return (dispatch) => {
    dispatch({
      type: 'CREATE_TOKEN',
      data
    });
  };
}
