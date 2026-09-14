import { useReducer } from "react";
import { FormReducer, initialState } from "../reducers/FormReducer";

const useValidateForm = () => {
  const [state, dispatch] = useReducer(FormReducer, initialState);

  const validate = () => {
    const errors: { name?: string; email?: string } = {};

    if (!state.name.trim()) {
      errors.name = "名前を入力してください";
    }

    if (!state.mailAddres.trim()) {
      errors.email = "メールアドレスを入力してください";
    } else if (!state.mailAddres.includes("@")) {
      errors.email = "@が含まれていません。";
    }

    return errors;
  };

  return {
    state,
    dispatch,
    validate,
  };
};

export default useValidateForm;
