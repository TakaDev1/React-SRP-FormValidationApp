interface FormType {
  name: string;
  email: string;
  errors: {
    name?: string;
    email?: string;
  };
}

type FormAction =
  | {
      type: "SET_NAME";
      payload: string;
    }
  | { type: "SET_EMAIL"; payload: string }
  | {
      type: "SET_ERROR";
      payload: {
        name?: string;
        email?: string;
      };
    }
  | {
      type: "RESET_FORM";
    };

export type { FormType, FormAction };
