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
    <form onSubmit={handleSubmit}>
      <div className="mt-10 flex flex-col gap-10 bg-blue-900 text-white font-bold text-left px-10 py-5 rounded">
        <label htmlFor="name">
          名前
          <input
            id="name"
            type="text"
            value={state.name}
            onChange={handleName}
            className="border ml-10 rounded bg-gray-800"
          />
        </label>

        {state.errors.name && <p className="text-red-400">{state.errors.name}</p>}

        <label htmlFor="email">
          メールアドレス:
          <input
            id="email"
            type="email"
            value={state.email}
            onChange={handleEmail}
            className="border ml-10 rounded bg-gray-800"
          />
        </label>
        {state.errors.email && <p className="text-red-400">{state.errors.email}</p>}
        <button
          type="submit"
          className="bg-gray-500 py-2 w-1/2 mx-auto rounded-lg cursor-pointer hover:opacity-80"
        >
          送信
        </button>
      </div>
    </form>
  );
};

export default UserForm;
