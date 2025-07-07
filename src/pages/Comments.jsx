import React, { useState } from "react";
import CommentList from "../components/comments/CommentList";

function Comments() {
  const [CommentData, setCommentData] = useState([]);
  // js 자리
  async function getComments() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      setCommentData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getComments();
  function resetComment() {
    setCommentData([]);
  }
  // jsx 자리
  return (
    <div>
      <h1>
        Comments 목록
        <button onClick={getComments}>목록 가져오기</button>
        <button onClick={resetComment}>목록 초기화</button>
      </h1>
      <div>
        {CommentData.map(function (item, index) {
          return (
            <CommentList
              postId={item.postId}
              id={item.id}
              name={item.name}
              email={item.email}
              body={item.body}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
