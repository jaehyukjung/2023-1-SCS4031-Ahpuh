import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignupForm.css";

function SignupForm() {
  let container = document.getElementById("container");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleAdressChange = (e) => {
    setAdress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signUp = {
      "email": email,
      "pwd": password,
      "poolName": name,
      "poolNum": number,
      "poolAdress": adress
    };

    try {
      await axios.post("/admin/sign-up", signUp);
      navigateLogin();
    } catch (err) {}

    // 회원가입 후에 필요한 처리를 수행합니다.
    // 예를 들어, 회원가입 성공 시에 다른 페이지로 이동하거나 상태를 업데이트하는 등의 작업을 수행할 수 있습니다.
  };

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const navigateSignup = () => {
    navigate("/signup");
  };

  const signUp = () => {
    fetch("3.37.74.123/admin/sign-up", {
      //회원가입시 입력한 값들이 서버로 전송될 수 있는 주소
      method: "POST",
      body: JSON.stringify({
        email: email,
        pwd: password,
        poolName: name,
        poolNum: number,
        poolAdress: adress,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result));
  };

  return (
    <div className="wrapper">
      <div className="title">
        <h1>회원가입</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col align-items-center flex-col sign-up">
              <div className="form-wrapper align-items-center">
                <div className="form sign-up">
                  <div className="input-group">
                    <i className="bx bxs-user"></i>
                    <input
                      type="text"
                      placeholder="Username"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bx-mail-send"></i>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      value={confirmpassword}
                      onChange={handleConfirmPassword}
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                      type="text"
                      placeholder="Phone number"
                      value={number}
                      onChange={handleNumberChange}
                    />
                  </div>
                  <div className="input-group">
                    <i className="bx bxs-lock-alt"></i>
                    <input
                      type="text"
                      placeholder="adress"
                      value={adress}
                      onChange={handleAdressChange}
                    />
                  </div>
                  <button type="submit">Sign up</button>
                  <br></br>
                  <div id="login">
                    <span>이미 가입하셨나요?</span>
                    <button onClick={navigateLogin}>로그인</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
