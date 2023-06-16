import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';
import ReactDOM from "react-dom";
import Swal from "sweetalert2";

function RealSwim({playList, index}){
    const [step, setStep] = useState(0);
    const [file, setFile] = useState({});
    const [videoUrl, setVideoUrl] = useState("Videos/real2.mp4");
    const [screenIndex, setScreenIndex] = useState(-1);
    const handleStep = (e) => {
        setStep(e.target.result);
    };
    const [buttons, setButtons] = useState([
      { label: "화면 1", active: true },
      { label: "화면 2", active: false },
      { label: "화면 3", active: false },
    ]);

    const [isBroadcasting, setIsBroadcasting] = useState(false); // 사고 방송 송출 상태

    const changeUrl = (index) => {
      const updatedButtons = buttons.map((button, i) => ({
        ...button,
        active: i === index,
      }));
      setButtons(updatedButtons);
      if (index === 0){
        setVideoUrl("Videos/real2.mp4")
        setScreenIndex(0);
        startCount();
      } else if(index === 1){
        setVideoUrl("Videos/real3.mp4")
        setScreenIndex(1);
        startCount();
      } else if(index === 2){
        setVideoUrl("Videos/output2.mp4")
        setScreenIndex(2);
        startCount();
      }
    };

    const navigate = useNavigate();
    const videoUpload = e => {
        const videoType = e.target.file.type.includes('video');

        setFile({
            url: URL.createObjectURL(e.target.files),
            video: videoType,
        });
    };

    const navigateMember = () => {
        navigate("/member");
    };

    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [isRunning, setIsRunning] = useState(false);


    useInterval(() => {
        setCount(count + 1);
        if (screenIndex === 0){
          if (count === 20000000000000){
            Swal.fire("1번 화면 다이빙 감지", "사고를 감지했습니다.", "warning");  
          } else if(count === 8) {
            Swal.fire("1번레인 익수 감지", "사고를 감지했습니다.", "warning");
          } else if (count === 15) {
            Swal.fire({
                title: "2단계 경고",
                text: "안내 방송을 송출하겠습니까?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            }).then((result) => {
                if (result.isConfirmed) {
                  playBroadcastAudio();
                }
            });
          } else if (count === 25) {
              Swal.fire({
                title: "119 긴급 신고",
                text: "신고하겠습니까?",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "사고 발생 알림",
                    text: "보호자에게 연락하시겠습니까?",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonText: "확인",
                    cancelButtonText: "취소",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/member");
                    }
                  });
                }})
          }
        }else if (screenIndex ===1){
          if (count === 2){
            Swal.fire("2번 화면 다이빙 감지", "사고를 감지했습니다.", "warning");  
          } else if(count === 9) {
            Swal.fire("1번레인 익수 감지", "사고를 감지했습니다.", "warning");
          } else if (count === 17) {
            Swal.fire({
                title: "2단계 경고",
                text: "안내 방송을 송출하겠습니까?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            }).then((result) => {
                if (result.isConfirmed) {
                  playBroadcastAudio();
                }
            });
          } else if (count === 25) {
              Swal.fire({
                title: "119 긴급 신고",
                text: "신고하겠습니까?",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "사고 발생 알림",
                    text: "보호자에게 연락하시겠습니까?",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonText: "확인",
                    cancelButtonText: "취소",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/member");
                    }
                  });
                }})
          }
        }else if (screenIndex === 2){
          if (count === 2){
            Swal.fire("3번 화면다이빙 감지", "사고를 감지했습니다.", "warning");  
          } else if(count === 9) {
            Swal.fire("1번레인 익수 감지", "사고를 감지했습니다.", "warning");
          } else if (count === 17) {
            Swal.fire({
                title: "2단계 경고",
                text: "안내 방송을 송출하겠습니까?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            }).then((result) => {
                if (result.isConfirmed) {
                  playBroadcastAudio();
                }
            });
          } else if (count === 25) {
              Swal.fire({
                title: "119 긴급 신고",
                text: "신고하겠습니까?",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "사고 발생 알림",
                    text: "보호자에게 연락하시겠습니까?",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonText: "확인",
                    cancelButtonText: "취소",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/member");
                    }
                  });
                }})
          }
        }
    }, isRunning ? delay : null);

    const startCount = () => {
        setCount(0);
        setIsRunning(true);
    }

    const playBroadcastAudio = () => {
      setIsBroadcasting(true);
      const audio = new Audio("/Videos/drown2.mp3"); 
      audio.play();
    };

    return(
        <>
            <h2>실시간 수영장 화면</h2>
            <ButtonGroup buttons={buttons} onClickButton={changeUrl} />
            <center>
                <div style={{align:"center"}}>
                    <ReactPlayer
                        className='react-player'
                        url={videoUrl}
                        align="center"
                        width='800px'
                        height='500px'
                        playing={true}
                        muted={false}
                        controls={false}
                        light={false}
                        pip={true}
                        poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}
                    />
                </div>
            </center>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'center', gap: '80px'}}>
                <div style={{display:'inline-block', float:'left'}}>
                    <button style={{color:'white', fontSize: '15px', padding: '12px 24px', backgroundColor:'#45B881',border:"none",borderRadius:'10px'}}><strong>다이빙 금지 방송</strong></button>
                </div>
                <div style={{display:'flex', float:'right'}}>
                    <button style={{color:'white', fontSize: '15px', padding: '12px 24px',marginLeft: '30px', backgroundColor:'#3C76AB', border:"none", borderRadius:'10px' }} onClick={playBroadcastAudio}><strong>사고 방송 송출</strong></button>
                    <button onClick={()=>{
                      Swal.fire({
                        title: "119 긴급 신고",
                        text: "신고하겠습니까?",
                        icon: "info",
                        showCancelButton: true,
                        confirmButtonText: "확인",
                        cancelButtonText: "취소",
                    }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            title: "사고 발생 알림",
                            text: "보호자에게 연락하시겠습니까?",
                            icon: "success",
                            showCancelButton: true,
                            confirmButtonText: "확인",
                            cancelButtonText: "취소",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              navigate("/member");
                            }
                          });
                        }})
                    }} style={{color:'white', fontSize: '15px', padding: '12px 24px' ,marginLeft: '30px', backgroundColor:'#E02E2E', border:"none", borderRadius:'10px'}}><strong>119 긴급 신고</strong></button>
                    <button style={{color:'white', fontSize: '15px', padding: '12px 24px',marginLeft: '30px', backgroundColor:'#645C30',border:"none",borderRadius:'10px' }} onClick={navigateMember}><strong>사고 발생 알림</strong></button>
                </div>
            </div>
        </>
    )
}

export default RealSwim;

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function ButtonGroup({ buttons, onClickButton }) {
  return (
    <div>
      {buttons.map((button, index) => (
        <button
          key={index}
          style={{
            color: "white",
            fontSize: "15px",
            padding: "12px 24px",
            margin: "10px",
            backgroundColor: button.active ? "#2F88FF" : "#DEEBFD",
            border: "none",
            borderRadius: "10px",
          }}
          onClick={() => onClickButton(index)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}