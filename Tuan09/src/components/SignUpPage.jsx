//<img src="../images/c4c32348-ed67-4e6e-930b-aa11a7bbe675.svg" alt="visual" />
//import "./SignUpPage.css";

import React from "react";
import "./SignUpPage.css";

const SocialButton = ({ text }) => {
  return (
    <button className="social-btn">
      {text}
    </button>
  );
};

const SignupPage = () => {
  return (
    <div className="wrapper">
      {/* LEFT - FORM */}
      <div className="left">
        <div className="form-container">
          <h2>Create an account</h2>

          <div className="form">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password (8+ chars)" />

            <button className="signup-btn">Sign up</button>

            <p className="divider">Or sign in with</p>

            <div className="social-group">
              <SocialButton text="G" />
              <SocialButton text="f" />
              <SocialButton text="A" />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT - IMAGE */}
      <div className="right">
        <img src="../images/c4c32348-ed67-4e6e-930b-aa11a7bbe675.svg" alt="visual" />
      </div>
    </div>
  );
};

export default SignupPage;