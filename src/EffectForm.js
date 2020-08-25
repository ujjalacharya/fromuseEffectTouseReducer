import React, { useEffect, useState } from "react";
import { login } from "./utility/api";

function EffectForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const resp = await login(username, password).catch((err) => {
      setError("error");
      setLoading(false);
    });

    if (resp && resp.status === 200) {
      setError(false);
      setSuccess(true);
      setLoading(false);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
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
          <h1>Use Effect Form</h1>
        </div>
        <br />
        <input
          className="effectForm__input"
          placeholder="Username"
          autoComplete={false}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="effectForm__input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
