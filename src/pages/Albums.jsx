import React, { useState } from "react";
import AlbumList from "../components/albums/AlbumList";

function Albums() {
  // js 자리
  const [albumsData, setAlbumsData] = useState([]);

  async function getAlbums() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const result = await res.json();
      setAlbumsData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getAlbums();
  // jsx 자리
  return (
    <div>
      <h1>
        Albums 목록<button onClick={getAlbums}>목록 가져오기</button>
      </h1>
      <div>
        {albumsData.map(function (item, index) {
          return (
            <AlbumList
              userid={item.userid}
              id={item.id}
              title={item.title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
