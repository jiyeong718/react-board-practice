import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  // 스페이스바 입력 무시
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  const handleId = (e) => {
    setUserId(e.target.value);
    console.log(userId);

    // 공백 여부 체크
    if (e.data === " ") {
      alert("공백은 입력할 수 없습니다.");
    }
  }
  const handlePw = (e) => {
    setUserPw(e.target.value);
    console.log(userPw);

    // 공백 여부 체크
    if (e.data === " ") {
      alert("공백은 입력할 수 없습니다.");
    }
  }
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };

  function postLoginData(){
    const url = 'https://crud.hoydev.site/api/account/login';
    axios.post(url,{
      loginId: userId,
      loginPassword: userPw
    })
      .then(function (response){
        handleNavigate();

        console.log("로그인 성공");
      })
      .catch(function (error){
        alert(error.response.data.validation.loginPassword);
        console.log(error.response.data.validation.loginPassword);
      })
  }

  return (
    <div>
      <h1>로그인 페이지</h1>
      <input id="id"
             type="text"
             placeholder="아이디를 입력하세요"
             value={userId}
             onInput={handleId}
             onKeyDown={handleKeyDown}/>
      <input id="pw"
             type="text"
             placeholder="비밀번호를 입력하세요"
             value={userPw}
             onInput={handlePw}
             onKeyDown={handleKeyDown}/>
      <button className="login-button" onClick={postLoginData}>로그인</button>
      <button className="login-signup-button">회원가입</button>
    </div>
  );
}

export default Login;