import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Subpage.css';

function Subpage() {
  const navigate = useNavigate();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigateSetting = () => {
    navigate("/setting");
  };
  const handleClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <>
      <div id="main">
        <img id="logo" alt="logo" src="img/aupuh_logo.png" />
      </div>
      <div>
        <h3>
          어푸는 AI 모델을 활용하여 실시간 CCTV 영상에서<br />
          안전사고 발생을 감지합니다.
        </h3>
      </div>
      <div id="login">
            <button
              id="btn"
              onClick={navigateSetting}
              style={{
                backgroundColor: isButtonClicked ? "" : "#FFFFFF",
              }}
              onMouseDown={handleClick}
              onMouseUp={() => setIsButtonClicked(false)}
            >
              수영장 CCTV 등록하기
            </button>
      </div>
      <div id="wave-container">
        <img id="wave" alt="wave" src="img/wave1.png" />
      </div>
    </>
  );
}

export default Subpage;