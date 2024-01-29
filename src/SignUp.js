import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SignUp(){
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userEmail, setUserEmail] = useState("");
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
    } else if (e.data === 0){

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
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
    console.log(userEmail);

    // 공백 여부 체크
    if (e.data === " ") {
      alert("공백은 입력할 수 없습니다.");
    }
  }
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/login');
  };
  function postSignupData(){
    const url = '/api/article/post';
    axios.post(url,{
      signupId: userId,
      signupPw: userPw,
      email: userEmail
    })
      .then(function (response){
        handleNavigate();
        console.log(response.data);
      })
      .catch(function (error){
        console.log('alert: ', error.response);
      })
  }
  return(
    <>
      <h1>회원 가입</h1>

      <div>
        <input id="id" type="text"
               placeholder="4자~10자 사이, 소문자 영문 +_숫자 조합"
               value={userId}
               onInput={handleId}
               onKeyDown={handleKeyDown}/>
        <input id="pw" type="text"
               placeholder="8자 ~ 16자 사이, 영문,숫자,특수문자조합"
               value={userPw}
               onInput={handlePw}
               onKeyDown={handleKeyDown}/>
        <input id="email" type="text"
               placeholder="아이디@주소 형식"
               value={userEmail}
               onInput={handleEmail}
               onKeyDown={handleKeyDown}/>
        <button onClick={postSignupData}>회원가입</button>
      </div>
    </>
  )
}

export default SignUp;