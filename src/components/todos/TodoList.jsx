import styled from "@emotion/styled";
import React from "react";

function TodoList({ userId, id, title, completed }) {
  // js 자리
  const TodoCard = styled.div`
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
  const TodoId = styled.div`
    position: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const TodoTitle = styled.div`
    font-size: 15px;
    text-align: left;
    color: #999;
  `;
  const TodoCompleted = styled.div`
    font-size: 15px;
    text-align: left;
    color: #999;
  `;

  // jsx 자리
  return (
    <TodoCard>
      <TodoId>
        {userId} . {id}
      </TodoId>
      <TodoTitle>{title}</TodoTitle>
      <TodoCompleted>{completed}</TodoCompleted>
    </TodoCard>
  );
}

export default TodoList;
