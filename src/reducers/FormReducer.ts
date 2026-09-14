import type { Action, FormType } from "../types/FormType";

const initialState: FormType = { name: "", mailAddres: "" };

const FormReducer = (state: FormType, action: Action): FormType => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, mailAddres: action.payload };
    default:
      return state;
  }
};

export { initialState, FormReducer };
