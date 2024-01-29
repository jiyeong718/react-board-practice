import React from 'react';

const Board = (props) => {
  const {index, title, contents} = props

  return (
    <>
      <header>
        <a href="/">홈</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="/boardlist">게시판</a>
        <hr/>
      </header>

      <div>
        <h3>{title}</h3>
        <hr/>
        <p>{contents}</p>
      </div>


    </>
  );
};

export default Board;