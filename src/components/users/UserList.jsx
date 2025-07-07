import styled from "@emotion/styled";
import React from "react";

function UserList({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) {
  // js 자리
  const UserCard = styled.div`
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
  const UserName = styled.div`
    position: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const UserInfo = styled.div`
    font-size: 15px;
    text-align: left;
    color: #999;
  `;
  // jsx 자리
  return (
    <UserCard>
      <UserName>
        {id} : {name} , {username}
      </UserName>
      <UserInfo>
        <div>{email}</div>
        <div>
          {[address.street, address.suite, address.city, address.zipcode]}
        </div>
        <div>{address.geo.lat}</div>
        <div>{address.geo.lng}</div>
        <div>{phone}</div>
        <div>{website}</div>
        <div>{[company.name, company.catchPhrase, company.bs]}</div>
      </UserInfo>
    </UserCard>
  );
}

export default UserList;
