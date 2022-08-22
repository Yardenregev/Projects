import React from "react";
import '../css/login.css';
import CloseIcon from '@mui/icons-material/Close';
function LoginPage() {

    const closeLoginPopup = () => {
        // close the login popup.
        document.body.style.pointerEvents = "auto";
        document.getElementById("login-popup").style.display = "none";
    }
  return (
    <div className="login-page" id="login-popup">
      <form className="login-form" action="">
        <h1>Log in</h1>
        <CloseIcon className="close-icon" onClick={closeLoginPopup} />
        <label className="login-form-item">
            Username:
            &nbsp;
            <input className="login-input" type="text" name="username" required />
        </label>
        <label className="login-form-item">
            Password:
            &nbsp;
            <input className="login-input" type="password" name="password" required />
        </label>
        <input className="login-form-item" type="submit" value="Submit" id="login-submit-button" />
      </form>
    </div>
  );
}

export default LoginPage;