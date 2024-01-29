import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Board from "./Board";

const BoardDetail = () => {
  const {index} = useParams();
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const getBoard = () => {
    const res = axios.get('https://crud.hoydev.site/api/article/3').data;
    setBoard(res.data);
    setLoading(false);
  }
  useEffect(() => {
    getBoard();
  }, []);

  function postEdit(){
    const url = 'https://crud.hoydev.site/api/article/edit/2';
    axios.post(url,{
      title: "수정된 게시물",
      content: "수정된 게시물 내용"
    })
      .then(function (response){
        console.log("수정되었습니다.");
      })
      .catch(function (error){
        console.log(error.message);
      })
  }

  function getDelete(){
    const url = 'https://crud.hoydev.site/api/article/delete/1';
    axios.get(url)
      .then(function (response){
        console.log("삭제가 완료되었습니다.");
      })
      .catch(function (error){
        console.log(error.message);
      })
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
        {loading ? (
          <h2>loading...</h2>
        ) : (
          <Board
            idx={board.idx}
            title={board.title}
            contents={board.contents}
            createdBy={board.createdBy}
          />
        )}
        <button onClick={postEdit}>수정</button>
        <button onClick={getDelete}>삭제</button>
      </div>


    </>
  );
};

export default BoardDetail;