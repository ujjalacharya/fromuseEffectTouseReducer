import React, { useReducer, useState } from "react";
import { login } from "./utility/api";

const initialState = {
  username: "",
  password: "",
  loading: false,
  error: false,
  success: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case "loading":
      return { ...state, loading: true, error: false };
    case "error":
      return { ...state, error: true, loading: false };
    case "success":
      return { ...state, error: false, loading: false, success: true };
    case "logout":
      return { ...state, error: false, success: false, username: "", password: "" };
  }
};

function EffectForm() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { username, password, loading, error, success } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "loading" });

    const resp = await login(username, password).catch((err) => {
      dispatch({ type: "error" });
    });

    if (resp && resp.status === 200) {
      dispatch({ type: "success" });
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "logout" });
  };

  {
    return success ? (
      <>
        <div>Dashboard</div>
        <button onClick={handleLogout}>Logout</button>
      </>
    ) : (
      <form className="effectForm__form" onSubmit={handleSubmit}>
        <div className="center-flex">
          <h1>Use Reducer Form</h1>
        </div>
        <br />
        <input
          className="effectForm__input"
          placeholder="Username"
          autoComplete={false}
          value={username}
          onChange={(e) =>
            dispatch({
              type: "field",
              fieldName: "username",
              payload: e.target.value,
            })
          }
        />
        <br />
        <input
          className="effectForm__input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) =>
            dispatch({
              type: "field",
              fieldName: "password",
              payload: e.target.value,
            })
          }
        />
        <br />
        <button className="effectForm__submit" type="submit">
          Submit
        </button>
        <br />
        {loading && (
          <div className="center-flex">
            <h1 className="effectForm__loading">Loading...</h1>
          </div>
        )}
        <br />
        {error && (
          <div className="center-flex">
            <h1 className="effectForm__error">Error</h1>
          </div>
        )}
      </form>
    );
  }
}

export default EffectForm;
