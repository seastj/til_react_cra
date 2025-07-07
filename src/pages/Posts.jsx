import React, { useState } from "react";
import PostList from "../components/posts/PostList";

function Posts() {
  // js 자리
  // let postsArr = [];
  const [postsArr, setPostsArr] = useState([]);

  async function getPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      console.log(result);
      // postsArr result;
      setPostsArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getPosts();
  // 데이터를 컴포넌트로 출력하는 함수
  function makePostList() {
    let list = [];
    list = postsArr.map(function (item, index) {
      return <PostList key={index}></PostList>;
    });
    return list;
  }

  function resetList() {
    setPostsArr([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Posts 목록
        <button onClick={getPosts}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h1>
      <div>
        {postsArr.map(function (item, index) {
          return (
            <PostList
              id={item.id}
              title={item.title}
              body={item.body}
              userid={item.userid}
              key={index}
            ></PostList>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
