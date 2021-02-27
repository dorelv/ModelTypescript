export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';

export const apiRequest = () => ({ type: API_REQUEST });
export const apiSuccess = payload => ({ type: API_SUCCESS, payload });

