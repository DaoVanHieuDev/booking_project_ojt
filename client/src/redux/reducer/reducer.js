// import { userReducer } from "./userReducer";

// export const rootReducer = combineReducers({
//   userReducer,
// });

// export const userPostFetch = (user) => {
//   return (dispatch) => {
//     return fetch("http://localhost:8000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ user }),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         if (data.message) {
//         } else {
//           localStorage.setItem("token", data.jwt);
//           dispatch(loginUser(data.user));
//         }
//       });
//   };
// };

// const loginUser = (userObj) => ({
//   type: "LOGIN_USER",
//   payload: userObj,
// });

// export const userLoginFetch = (user) => {
//   return (dispatch) => {
//     return fetch("http://localhost:3000/api/v1/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ user }),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         if (data.message) {
//         } else {
//           localStorage.setItem("token", data.jwt);
//           dispatch(loginUser(data.user));
//         }
//       });
//   };
// };
