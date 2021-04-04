const initialState = {
  msg: "",
  resetPasswordMsg: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESSFULLY":
      return {
        ...state,
        msg: action.payload,
      };
    case "SIGN_IN_ERROR":
      return {
        ...state,
        msg: action.payload,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        msg: "",
        resetPasswordMsg: "",
      };
    case "RESET_PASSWORD":
      return {
        ...state,
        resetPasswordMsg: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
