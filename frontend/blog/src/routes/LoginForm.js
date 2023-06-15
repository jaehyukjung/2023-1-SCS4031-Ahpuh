import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../component/Nav.js";
import "../styles/Main.css";


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const navigateSignup = () => {
    navigate("/signup");
  };
  const navigateMain = () => {
    navigate("/subpage");
};


  const handleSubmit2 = async (e) => {
    e.preventDefault();
  
    const login = {
      "email": email,
      "pwd": password,
    };
  
    try {
      const response = await axios.post("/admin/sign-in", login); // 응답을 받아옴
      console.log(response)
      if (response.data.isSuccess === true) { // response.data로 응답 데이터에 접근
        window.localStorage.setItem("token", response.data.access_token); // 응답 데이터의 access_token을 localStorage에 저장
        navigateMain();
      } else {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        console.log("Email:", email);
        console.log("Password:", password);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='wrapper'>
      <div id="main">
        <img id="logoLogin" alt="logo" src="img/aupuh_logo.png" />
        <h3 id="aupuhLogin">어푸</h3>
      </div>
      <form onSubmit={handleSubmit2}>
      <div className='container'>
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form login">
                <div className="input-group">
                  <i className='bx bx-mail-send'></i>
                  <input style ={{width:"300px"}}type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt'></i>
                  <input style ={{width:"300px"}} type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button type='submit'>로그인 </button>
                <div>
                  <span>
                    회원이 아니신가요?
                  </span>
                    <button onClick={navigateSignup} style={{padding :"5px"}}>회원가입</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>Email:</label>
    //     <input type="email" value={email} onChange={handleEmailChange} />
    //   </div>
    //   <div>
    //     <label>Password:</label>
    //     <input type="password" value={password} onChange={handlePasswordChange} />
    //   </div>
    //   <button type="submit">Login</button>
    // </form>
  );
}

export default LoginForm;