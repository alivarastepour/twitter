import * as actions from "./constants";
export const reducer = (state, action) => {
  const type = action.type;
  switch (type) {
    case actions.SET_BIRTH_YEAR:
      return { ...state, birthYear: action.payload };
    case actions.SET_BIRTH_DAY:
      return { ...state, birthDay: action.payload };
    case actions.SET_BIRTH_MONTH:
      return { ...state, birthMonth: action.payload };
    case actions.SET_NAME:
      return { ...state, name: action.payload };
    case actions.SET_EMAIL:
      return { ...state, email: action.payload };
    case actions.SET_NAME_ERROR:
      return { ...state, nameError: action.payload };
    case actions.SET_EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    default:
      return state;
  }
};
