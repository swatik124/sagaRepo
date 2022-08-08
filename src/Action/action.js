// import { ADD_DATA, DELETE_DATA, GET_USER, SET_USER } from "./type";

// // This is a synchronous action, hence
// // thunk will not interfere.
// export const deleteData = () => {
//   return {
//     type: DELETE_DATA,
//   };
// };

// export const addData = () => {
//   return async (dispatch) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");

//     const data = response.json();
//     dispatch({
//       type: ADD_DATA,
//       payload: data,
//     });
//   };
// };

// //SAGA

export const getUser = () => {
  return {
    type: "GET_USER_REQUESTED",
  };
};

// export const setUser = (user) => {
//   return {
//     type: SET_USER,
//     user
//   };
// };
