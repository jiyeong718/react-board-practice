import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const getBoardList = () =>{
    const url = 'https://crud.hoydev.site/api/article/3';
    axios.get(url)
      .then(function (response){
        console.log(response.data);

        setBoardList(response.data);
        console.log("boardList: " + boardList);

        const page = response.pagination;
        console.log(page);
      })
      .catch(function (error){
        console.log(error);
      })
  }
  useEffect(() => {
    getBoardList();
  }, []);


  return (
    <>
      <header>
        <a href="/">홈</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="/src/BoardList">게시판</a>
        <hr/>
      </header>

      <div>
        <a href="/write">글쓰기</a>
        <ul>
          {boardList.map((board) => (
            <li key={board.index}>
              <Link to={`/board/${board.index}`}>{board.title}</Link>
            </li>
          ))}
        </ul>
      </div>


    </>
  );
};

export default BoardList;