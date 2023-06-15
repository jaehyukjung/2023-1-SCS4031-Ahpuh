import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Main.css";

function Main() {
  const navigate = useNavigate();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const navigateLogin = () => {
    navigate("/login");
  };

  const navigateSignup = () => {
    navigate("/signup");
  };

  const handleClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <>
      <div id="main">
        <img id="logo" alt="logo" src="img/aupuh_logo.png" />
        <h3 id="aupuh">어푸</h3>
      </div>
      <div id="centered-container">
        <div id="button-container">
          <div id="login">
            <button
              id="btn"
              onClick={navigateSignup}
              style={{
                backgroundColor: isButtonClicked ? "" : "#FFFFFF",
              }}
              onMouseDown={handleClick}
              onMouseUp={() => setIsButtonClicked(false)}
            >
              회원가입
            </button>
          </div>
          <div id="login">
            <button
              id="btn"
              onClick={navigateLogin}
              style={{
                backgroundColor: isButtonClicked ? "" : "#FFFFFF",
              }}
              onMouseDown={handleClick}
              onMouseUp={() => setIsButtonClicked(false)}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;