import React from "react";

function EffectForm() {
  return (
    <form className="effectForm__form">
      <div className="center-flex">
        <h1>Use Effect Form</h1>
      </div>
      <br />
      <input
        className="effectForm__input"
        placeholder="Username"
        autoComplete={false}
      />
      <br />
      <input
        className="effectForm__input"
        placeholder="Password"
        type="password"
      />
      <br />
      <button className="effectForm__submit" type="submit">
        Submit
      </button>
      <br />
      <div className="center-flex">
        <h1 className="effectForm__loading">Loading...</h1>
      </div>
      <br />
      <div className="center-flex">
        <h1 className="effectForm__error">Error</h1>
      </div>
    </form>
  );
}

export default EffectForm;
