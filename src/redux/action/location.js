export const destination = (location) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: '',
      });
      dispatch({
        type: 'DESTINATION',
        payload: location,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: 'Location not found',
      });
    }
  };
};

export const depture = (location) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: '',
      });
      dispatch({
        type: 'DEPTURE',
        payload: location,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'ORDER_MESSAGE',
        payload: 'Location not found',
      });
    }
  };
};
