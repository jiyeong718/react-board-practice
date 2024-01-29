import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from "./SignUp";
import BoardList from "./BoardList";
import Main from "./Main";
import BoardDetail from "./BoardDetail";
import Write from "./Write";
function App() {
  // 회원가입

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/boardlist' element={<BoardList/>} />
          <Route path='/board/:index' element={<BoardDetail/>} />
          <Route path='/write' element={<Write/>} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
