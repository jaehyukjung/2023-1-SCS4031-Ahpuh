import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './Nav.css';
import { Routes } from 'react-router-dom';

function Nav(){

    return (
        <div>
            <div className='navbar1'>
            <Link className='navbarMenu' to = {'/'} style={{textAlign: "left", color:"#2F88FF",fontFamily: "JalnanOTF"}}>어푸</Link>
            </div>
            <div className='navbar2'>
                <Link className='navbarMenu' to = {'/realswim'} style={{fontFamily: "10px"}}>실시간 수영장</Link>
                <Link className='navbarMenu' to = {'/member'} style={{fontFamily: "10px"}}>회원 관리</Link>
                <Link className='navbarMenu' to = {'/setting'}style={{fontFamily: "10px"}}>관리자 설정</Link>
                <Link className='navbarMenu' to = {'/login'}style={{fontFamily: "10px"}}>어푸 수영장</Link>
            </div>
        </div>
    )
}

export default Nav;