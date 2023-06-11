import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';

function RealSwim({playList, index}){
    const [file, setFile] = useState({});
    const navigate = useNavigate();
    const videoUpload = e =>{
        const videoType = e.target.file.type.includes('video');

        setFile({
            url : URL.createObjectURL(e.target.files),
            video:videoType,
        });
    };
    const navigateMember = () => {
        navigate("/member");
      };
    return(
        <>
            <h2>실시간 수영장 화면</h2>
            <center>
                <div style={{align:"center"}}>
                    {/* <ReactPlayer
                        className='react-player'
                        url={'https://www.youtube.com/embed/fcncKfUrds4'}    // 플레이어 url
                        align = "center"
                        width='800px'         // 플레이어 크기 (가로)
                        height='500px'        // 플레이어 크기 (세로)
                        playing={true}        // 자동 재생 on
                        muted={true}          // 자동 재생 on
                        controls={true}       // 플레이어 컨트롤 노출 여부
                        light={false}         // 플레이어 모드
                        pip={true}            // pip 모드 설정 여부
                        poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                        // onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
                    /> */}
                    <video  width='800px'         // 플레이어 크기 (가로)
                        height='500px'>
                    <source src="img/cctv.mp4" type="video/mp4"></source>
                </video>
                </div>
            </center>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'center', gap: '80px'}}>
                <div style={{display:'inline-block', float:'left'}}>
                    <button style={{ fontSize: '13px', padding: '12px 24px'}}>다이빙 금지 방송</button>
                </div>
                <div style={{display:'flex', float:'right'}}>
                    <button style={{ fontSize: '13px', padding: '12px 24px',marginLeft: '30px', backgroundColor:'45B881' }}>사고 방송 송출</button>
                    <button style={{ fontSize: '13px', padding: '12px 24px' ,marginLeft: '30px'}}>119 긴급 신고</button>
                    <button style={{ fontSize: '13px', padding: '12px 24px',marginLeft: '30px' }} onClick={navigateMember}>사고 발생 알림</button>
                </div>
            </div> 
        </>
    )
}

export default RealSwim;