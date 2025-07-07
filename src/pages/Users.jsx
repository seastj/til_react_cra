import React, { useState } from "react";
import UserList from "../components/users/UserList";

function Users() {
  // js 자리
  const [UsersData, setUserData] = useState([]);

  async function getUser() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setUserData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getUser();
  function resetUser() {
    setUserData([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Users 목록
        <button onClick={getUser}>목록 가져오기</button>
        <button onClick={resetUser}>목록 초기화</button>
      </h1>
      <div>
        {UsersData.map(function (item, index) {
          return (
            <UserList
              id={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
              address={item.address}
              phone={item.phone}
              website={item.website}
              company={item.company}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Users;
