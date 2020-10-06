export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

// export function signInSuccess(token, user) {
//   return {

//     type: '@auth/SIGN_IN_SUCCESS',
//     payload: { token, user },
//   };
// }
const setUser = (payload) => ({ type: '@auth/SIGN_IN_SUCCESS', payload });

export function signInSuccess(user, dispatch) {
  fetch(`http://localhost:4000/users/authenticate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    });
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
