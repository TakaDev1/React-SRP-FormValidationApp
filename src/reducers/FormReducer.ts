import type { FormAction, FormType } from "../types/FormType";

const initialState: FormType = { name: "", email: "", errors: {} };

const FormReducer = (state: FormType, action: FormAction): FormType => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };

    case "SET_ERROR":
      return { ...state, errors: action.payload };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

export { initialState, FormReducer };
