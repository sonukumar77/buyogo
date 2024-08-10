const INITIAL_STATE = {
  usersData: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return { ...state, usersData: [...state.usersData, action.payload] };
    default:
      return state;
  }
};

export default userReducer;
