interface FormType {
  name: string;
  mailAddres: string;
}

type Action =
  | {
      type: "SET_NAME";
      payload: string;
    }
  | { type: "SET_EMAIL"; payload: string };

export type { FormType, Action };
