const initialState = {
  location: [
    { rumah: 'palmerah' },
    { kantor: 'semanggi' },
  ],
  destination: null,
  depture: null,
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case 'DESTINATION': {
      return {
        ...state,
        destination: action.payload,
      };
    }
    case 'DEPTURE': {
      return {
        ...state,
        depture: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default location;
