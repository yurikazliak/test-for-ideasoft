export const requestArr = () => {
  return { type: 'REQUESTED_ARRAY' }
};

export const requestArrSuccess = (data) => {
  return { type: 'REQUESTED_ARRAY_SUCCEEDED', array: data }
};

export const requestArrError = () => {
  return { type: 'REQUESTED_ARRAY_FAILED' }
};

export const fetchArr = () => {
  return { type: 'FETCHED_ARRAY' }
};