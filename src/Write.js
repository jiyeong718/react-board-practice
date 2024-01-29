import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  const handleInput = (e) => {
    if(e.target.className === "board-title-input"){
      setTitle(e.target.value);
    }if(e.target.className === "board-text-input"){
      setContent(e.target.value);
    }
  }

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/board`);
  };

  function handleWrite(){
    const url = '/api/article';
    axios.post(url,{
      title: title,
      content: content
    })
      .then(function (response){
        console.log(response.data);
        handleNavigate();
      })
      .catch(function (error){
        console.log(error);
      })

    console.log("title: " + title, "content: " +  content);
  }

  return (
    <>
      <header>
        <a href="/">홈</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="/boardlist">게시판</a>
        <hr/>
      </header>

      <div>
        <input className="board-title-input"
               type="text"
               placeholder="게사글 제목을 입력하세요."
               onInput={handleInput}
               onKeyDown={handleKeyDown}/>
        <br/>
        <textarea className="board-text-input"
                  placeholder="게사글 내용을 입력하세요."
                  onInput={handleInput}>
        </textarea>

        <div>
          <button onClick={handleWrite}>저장</button>
        </div>
      </div>
    </>
  );
};

export default Write;