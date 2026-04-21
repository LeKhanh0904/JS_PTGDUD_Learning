import React from "react";
import "./Test.css"

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="input-box">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

const SocialButton = ({ text, variant }) => {
  return (
    <button className={`social-btn ${variant}`}>
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
            <InputField label="Full name" type="text" placeholder="Enter your name" />
            <InputField label="Email" type="email" placeholder="example@gmail.com" />
            <InputField label="Password" type="password" placeholder="At least 8 characters" />

            <button className="signup-btn">Sign up</button>

            <p className="divider">Or sign in with</p>

            <div className="social-group">
                <SocialButton text="G" variant="google" />
                <SocialButton text="f" variant="facebook" />
                <SocialButton text="A" variant="apple" />
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