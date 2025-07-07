import styled from "@emotion/styled";
import React from "react";

function PhotoList({ albumId, id, title, url, thumbnailUrl }) {
  // js 자리
  const PhotoCard = styled.div`
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
  const PhotoTitle = styled.div`
    position: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PhotoUrl = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  const PhotoOther = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  // jsx 자리
  return (
    <PhotoCard>
      <PhotoTitle>
        {id}.{title}
      </PhotoTitle>
      <PhotoUrl>Url : {url}</PhotoUrl>
      <PhotoOther>Other Url : {thumbnailUrl}</PhotoOther>
    </PhotoCard>
  );
}

export default PhotoList;
