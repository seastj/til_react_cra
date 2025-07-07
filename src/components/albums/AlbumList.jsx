import styled from "@emotion/styled";
import React from "react";

function AlbumList({ userid, id, title }) {
  // js 자리
  const AlbumCard = styled.div`
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
  const AlbumTitle = styled.h2`
    position: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const AlbumUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  // jsx 자리
  return (
    <AlbumCard>
      <AlbumTitle>
        {id}.{title}
      </AlbumTitle>
      <AlbumUser>User : {userid}</AlbumUser>
    </AlbumCard>
  );
}

export default AlbumList;
