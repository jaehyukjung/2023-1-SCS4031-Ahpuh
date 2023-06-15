/* eslint-disable */
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './routes/Main';
import LoginForm from './routes/LoginForm';
import Nav from './component/Nav';
import './App.css';
import "./Fonts/Font.css";
import SignupForm from './routes/SignupForm';
import RealSwim from './routes/RealSwim';
import Member from './routes/Member';
import Setting from './routes/Setting';
import Subpage from './routes/Subpage';



function App() {

  return (
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/realswim' element={<RealSwim />}/>
          <Route path='/member' element={<Member />}/>
          <Route path='/setting' element={<Setting />}/>
          <Route path='/login' element={<LoginForm />}/>
          <Route path='/signup' element={<SignupForm />}/>
          <Route path='/subpage' element={<Subpage />}/>
        </Routes>
      </div>
  );
}

export default App;
