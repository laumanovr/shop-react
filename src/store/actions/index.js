export const GET_ALL_CARS = 'GET_ALL_CARS';
export const UPDATE_INFO = 'UPDATE_INFO';

export const getAllCars = (payload) => ({
    type: GET_ALL_CARS,
    payload: payload
});

export const updateInfo = (payload) =>({
   type: UPDATE_INFO,
   payload: payload
});