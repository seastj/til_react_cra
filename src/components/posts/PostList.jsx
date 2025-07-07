import styled from "@emotion/styled";
import React from "react";

function PostList({ id, title, body, userid }) {
  // js 자리
  const PostCard = styled.div`
    border-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    border: 6px solid #ffb703;
    margin: 20px;
    padding: 20px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const PostTitle = styled.h2`
    position: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PostBody = styled.div`
    font-size: 15px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 10px;
  `;
  const PostUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;

  // jsx 자리

  return (
    <PostCard>
      <PostTitle>
        {id}.{title}
      </PostTitle>
      <PostBody>{body}</PostBody>
      <PostUser>User : {userid}</PostUser>
    </PostCard>
  );
}

export default PostList;
