const initialState = {
  array: [],
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED_ARRAY':
      return {
        array: [],
        loading: true,
        error: false,
      };
    case 'REQUESTED_ARRAY_SUCCEEDED':
      return {
        array: ['This', ...action.array.slice(1), '.'],
        loading: false,
        error: false,
      };
    case 'REQUESTED_ARRAY_FAILED':
      return {
        array: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
