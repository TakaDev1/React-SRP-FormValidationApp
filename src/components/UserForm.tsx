import React from "react";
import useValidateForm from "../hooks/useValidateForm";

const UserForm = () => {
  const { state, dispatch, validate } = useValidateForm();

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_NAME",
      payload: event.target.value,
    });
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_EMAIL",
      payload: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validate();

    if (errors.name || errors.email) {
      return;
    }

    console.log("送信成功: ", state);

    dispatch({
      type: "RESET_FORM",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            名前
            <input id="name" type="text" value={state.name} onChange={handleName} />
          </label>

          {state.errors.name && <p>{state.errors.name}</p>}

          <label htmlFor="email">
            メールアドレス:
            <input id="email" type="email" value={state.email} onChange={handleEmail} />
          </label>
          {state.errors.email && <p>{state.errors.email}</p>}
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
