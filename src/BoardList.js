import React, {useState, useEffect} from 'react';
// import axios from "axios";

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  // const getBoardList = () =>{
  //   const url = 'https://crud.hoydev.site/api/article/3';
  //   axios.get(url)
  //     .then(function (response){
  //       console.log(response.data);
  //
  //       setBoardList(response.data);
  //       console.log("boardList: " + boardList);
  //
  //       const page = response.pagination;
  //       console.log(page);
  //     })
  //     .catch(function (error){
  //       console.log(error);
  //     })
  // }
  // useEffect(() => {
  //   getBoardList();
  // }, []);

  const [loading, setLoading] = useState (true);
  const [list, setList] = useState ([]);

  useEffect(()=>{
    loadList();
  },[]);

  const loadList = async () => {
    setLoading(true);

    const response = await (await fetch ("/list?limit=2")).json();

    setList (response.data);

    setLoading(false);
  }


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

        {loading && <div>Loading...</div>}

        {list.map (item => (
          <div className="listContainer" key={item.id}>
            <div className="title">{item.title}</div>
            <div className="contents">{item.content}</div>
          </div>
        ))}
      </div>


    </>
  );
};

export default BoardList;