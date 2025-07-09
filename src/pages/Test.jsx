import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

function Test() {
  // js
  // 변수 관리

  const [errorMsg, setErrorMsg] = useState("");
  // 모든 데이터가 모여지는 변수.
  const [formData, setFormData] = useState({
    user_id: "",
    user_email: "",
    user_pw: "",
  });
  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    if (formData.user_id === "") {
      setErrorMsg("아이디를 입력하세요.");
      return;
    }
    if (formData.user_email === "") {
      setErrorMsg("이메일을s 입력하세요.");
      return;
    }
    if (formData.user_pw === "") {
      setErrorMsg("비밀번호를 입력하세요.");
      return;
    }
    console.log("백엔드로 데이터 보냅니다.");
    // 쿼리 스트링으로 보내기
    console.log(
      `/login/?id=${formData.user_id}&email=${formData.user_email}&pw=${formData.user_pw}`,
    );
    // 객체로 보내기
    const data = { ...formData };
    setErrorMsg("");
  };

  // 모든 state 를 하나로 관리 합니다.
  const [saveData, setSaveData] = useState({});

  const 함수명 = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // const name = e.target.name;
    // const value = e.target.value;

    const { name, value } = e.target;
    console.log(name, value);

    saveData({ [name]: value });
  };
  // jsx
  return (
    <div>
      <h1>회원로그인</h1>
      <LoginForm
        formData={formData}
        errorMsg={errorMsg}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div></div>
    </div>
  );
}

export default Test;
