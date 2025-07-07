import React, { useState } from "react";
import PhotoList from "../components/photos/PhotoList";

function Photos() {
  // js 자리
  const [photosData, setPhotosData] = useState([]);

  async function getPhotos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      setPhotosData(result);
    } catch (error) {
      console.log(error);
    }
  }

  // getPhotos();
  function resetPhoto() {
    setPhotosData([]);
  }
  // jsx 자리
  return (
    <div>
      <h1>
        Photos 목록
        <button onClick={getPhotos}>목록 가져오기</button>
        <button onClick={resetPhoto}>목록 초기화</button>
      </h1>
      <div>
        {photosData.map(function (item, index) {
          return (
            <PhotoList
              albumId={item.albumId}
              id={item.id}
              title={item.title}
              url={item.url}
              thumbnailUrl={item.thumbnailUrl}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
