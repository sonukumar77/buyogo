export const registerUserAction = (data) => {
  return {
    type: "REGISTER_USER",
    payload: data,
  };
};

export const loginUserAction = (email, password) => {
  return {
    type: "LOGIN_USER",
    payload: { email: email, password: password },
  };
};
