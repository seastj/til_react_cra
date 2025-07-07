import styled from "@emotion/styled";
import React from "react";

function CommentList({ postId, id, name, email, body }) {
  // js 자리
  const CommentCard = styled.div`
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
  const CommentGroup = styled.div`
    position: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const CommentInfo = styled.div`
    font-size: 15px;
    text-align: left;
    color: #999;
  `;
  const CommentEmail = styled.div`
    font-size: 15px;
    text-align: left;
    color: #999;
  `;
  const CommentContent = styled.div`
    font-size: 15px;
    text-align: left;
    color: #999;
  `;

  // jsx 자리
  return (
    <CommentCard>
      <CommentGroup>Group : {postId}</CommentGroup>
      <CommentInfo>
        {id} . {name}
      </CommentInfo>
      <CommentEmail>Email : {email}</CommentEmail>
      <CommentContent>{body}</CommentContent>
    </CommentCard>
  );
}

export default CommentList;
