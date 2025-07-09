# useState

- 리액트에서 변수를 만드는 법
- `변수의 값이 변하면 웹브라우저의 화면도 변한다.`

```jsx
const [변수명, set변수명] = useState(초기값);
```

## 1. 일반 JS 일때

- 화면에 초기 값만 보이고 변화가 없다.

```js
import React from "react";

function Test() {
  // js
  let count = 0; // js 변수
  const add = () => {
    count = count + 1;
    console.log(count);
  };

  // jsx
  return (
    <div>
      <button onClick={add}>함수 실행</button>
      <p>count : {count}</p>
    </div>
  );
}

export default Test;
```

## 2. React 변수 일때

- 값이 set 으로 변하면 화면도 새로 그린다.(Rerendering)

```jsx
import React, { useState } from "react";

function Test() {
  // js
  const [count, setCount] = useState(0); // react 변수
  const add = () => {
    setCount(count + 1);
    console.log(count);
  };

  // jsx
  return (
    <div>
      <button onClick={add}>함수 실행</button>
      <p>count : {count}</p>
    </div>
  );
}

export default Test;
```

## 3. 다양한 예제

```jsx
import React, { useState } from "react";

function Test() {
  // js
  const [userName, setUserName] = useState(""); // React 변수
  const handleChange = e => {
    // setUserName(e.target.value);
  };
  const handleKeyUp = e => {
    if (e.key === "Enter") {
      const txt = e.target.value;
      // 추후 yup 라이브러리 사용해 보기
      if (!txt) {
        alert("이름을 한 자 이상 입력하셔야 합니다.");
        return;
      }
      setUserName(txt);
    }
  };
  // jsx
  return (
    <div>
      <h1>사용자 이름을 입력하면 이름 출력하기</h1>
      <input
        type="text"
        onChange={e => handleChange(e)}
        onKeyUp={e => handleKeyUp(e)}
        placeholder="이름을 입력해주세요."
      />
      <h2>안녕하세요. {userName}님 반가워요^^</h2>
    </div>
  );
}

export default Test;
```

```js
import React, { useState } from "react";

function Test() {
  // js
  const [agree, setAgree] = useState(false); // React 변수
  const handleChange = e => {
    //console.log(e.target);
    //console.log(e.target.value);
    setAgree(e.target.checked);
  };
  // jsx
  return (
    <div>
      <label>
        <input type="checkbox" onChange={e => handleChange(e)} />
        약관에 동의 합니다.
      </label>
      <p>{agree ? "동의합니다." : "동의가 필요합니다."}</p>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    const temp = "할 일";
    setTodoList([...todoList, temp]);
  };
  // jsx
  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>목록추가</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js
  // 입력중인 할 일
  const [todo, setTodo] = useState("");
  // 전체 목록
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    if (todo === "") {
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const handleChange = e => {
    // console.log(e.target); // 태그가 들어옴
    setTodo(e.target.value);
  };

  const handleKeyUp = e => {
    if (e.key === "Enter") {
      if (todo === "") {
        return;
      }
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };
  // jsx
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={e => handleChange(e)}
        onKeyUp={e => handleKeyUp(e)}
      />
      <button onClick={handleClick}>목록추가</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  const [dark, setDark] = useState(false);
  const handleClick = () => {
    setDark(!dark);
  };
  const AppStyle = {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    padding: "20px",
    color: dark ? "#fff" : "#000",
    background: dark ? "#000" : "#fff",
  };
  return (
    <div style={AppStyle}>
      <button onClick={handleClick}>
        {dark ? "화이트 모드로 변경" : "다크 모드로 변경"}
      </button>
      <h1>{dark ? "현재 다크모드 입니다" : "현재 화이트모드 입니다"}</h1>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js
  const [cart, setCart] = useState([]);
  const handleCartAdd = good => {
    setCart([...cart, good]);
  };
  // jsx
  return (
    <div>
      <h2>장바구니</h2>
      <button onClick={() => handleCartAdd("딸기")}>딸기</button>
      <button onClick={() => handleCartAdd("사과")}>사과</button>
      <button onClick={() => handleCartAdd("바나나")}>바나나</button>
      <div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Test;
```

## 4. 실전예제

### 4.1. 회원 가입

```jsx
import React, { useState } from "react";

function Test() {
  // js
  // 변수 관리
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    pw: "",
  });

  // 이벤트 처리함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPw = e => {
    setUserPw(e.target.value);
  };
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    if (userId === "") {
      setErrorMsg("아이디를 입력하세요.");
      return;
    }
    if (userEmail === "") {
      setErrorMsg("이메일을 입력하세요.");
      return;
    }
    if (userPw === "") {
      setErrorMsg("비밀번호를 입력하세요.");
      return;
    }
    console.log("백엔드로 데이터 보냅니다.");
    console.log(`${userId} ${userEmail} ${userPw}`);
    // 쿼리 스트링으로 보내기
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPw}`);
    // 객체로 보내기
    setFormData({ id: userId, email: userEmail, pw: userPw });
    setErrorMsg("");
  };
  // jsx
  return (
    <div>
      <h1>회원로그인</h1>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            value={userId}
            placeholder="아이디를 입력해주세요."
            onChange={e => handleUserId(e)}
          />
          <br />
          <input
            type="email"
            value={userEmail}
            placeholder="이메일을 입력하세요."
            onChange={e => handleEmail(e)}
          />
          <br />
          <input
            type="password"
            value={userPw}
            placeholder="비밀번호를 입력해주세요."
            onChange={e => handleUserPw(e)}
          />
          <br />
          <button type="submit">로그인</button>
        </form>
        <div style={{ color: "red" }}>{errorMsg}</div>
      </div>
    </div>
  );
}

export default Test;
```

- 각 입력 항목을 컴포넌트화 한다.
- 각 컴포넌트의 요소를 `emotion` 으로 스타일링 한다.
- 컴포넌트를 재활용하여 보자.
- src/components/form 폴더 만들기
- Input.jsx 파일생성(rfce)

#### 4.2. 기능 개선 이전 버전

```jsx
import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

function Test() {
  // js
  // 변수 관리
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    pw: "",
  });

  // 이벤트 처리함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPw = e => {
    setUserPw(e.target.value);
  };
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    if (userId === "") {
      setErrorMsg("아이디를 입력하세요.");
      return;
    }
    if (userEmail === "") {
      setErrorMsg("이메일을 입력하세요.");
      return;
    }
    if (userPw === "") {
      setErrorMsg("비밀번호를 입력하세요.");
      return;
    }
    console.log("백엔드로 데이터 보냅니다.");
    console.log(`${userId} ${userEmail} ${userPw}`);
    // 쿼리 스트링으로 보내기
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPw}`);
    // 객체로 보내기
    setFormData({ id: userId, email: userEmail, pw: userPw });
    setErrorMsg("");
  };
  // jsx
  return (
    <div>
      <h1>회원로그인</h1>
      <LoginForm
        userId={userId}
        setUserId={setUserId}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userPw={userPw}
        setUserPw={setUserPw}
        formData={formData}
        setFormData={setFormData}
        errorMsg={errorMsg}
        handleUserId={handleUserId}
        handleEmail={handleEmail}
        handleUserPw={handleUserPw}
        handleSubmit={handleSubmit}
      ></LoginForm>
      <div></div>
    </div>
  );
}

export default Test;
```

```jsx
// /src/components/form/LoginForm.jsx
import styled from "@emotion/styled";
import React from "react";
import InputField from "./form/InputField";

function LoginForm({
  userId,
  setUserId,
  userEmail,
  setUserEmail,
  userPw,
  setUserPw,
  formData,
  setFormData,
  errorMsg,
  handleUserId,
  handleEmail,
  handleUserPw,
  handleSubmit,
}) {
  const FormContainer = styled.div`
    width: 100%;
    padding: 25px;
    max-width: 400px;
    margin: 30px auto;
    border-radius: 16px;
    border-color: #fafafa;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `;
  const ErrorText = styled.div`
    color: #f00;
    margin-top: 10px;
    font-size: 12px;
  `;
  const SubmitButton = styled.button`
    width: 100%;
    padding: 15px;
    max-width: 100px;
    margin: 0px auto;
    display: block;
    border-radius: 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    &:hover {
      background-color: #0056b3;
    }
  `;

  return (
    <FormContainer>
      <form onSubmit={e => handleSubmit(e)}>
        <InputField
          label="아이디"
          type="text"
          value={userId}
          placeholder="아이디를 입력해주세요."
          onChange={e => handleUserId(e)}
        />
        <InputField
          label="이메일"
          type="email"
          value={userEmail}
          placeholder="이메일을 입력하세요."
          onChange={e => handleEmail(e)}
        />
        <InputField
          label="비밀번호"
          type="password"
          value={userPw}
          placeholder="비밀번호를 입력해주세요."
          onChange={e => handleUserPw(e)}
        />
        <br />
      </form>
      <SubmitButton type="submit">로그인</SubmitButton>
      <ErrorText>{errorMsg}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
```

```jsx
// /src/components/form/InputField.jsx
import styled from "@emotion/styled";
import React from "react";

function InputField({ label, type, value, placeholder, onChange }) {
  // js
  const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    &:focus {
      outline: none;
      border: 1px solid #007bff;
    }
  `;
  const StyledLabel = styled.label`
    font-size: 12px;
    display: block;
    padding-left: 10px;
    color: #333;
    font-weight: 600;
    white-space: nowrap;
    min-width: 50px;
  `;
  const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  `;

  // jsx
  return (
    <InputGroup>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputField;
```

### 4.3. 기능 개선 버전

- useState 가 너무 많음.(props 가 너무 많다.)
- 알아야 하는 문법

```js
[...arr, 요소];

{...obj, [속성명]:속성값}

const {name,vlaue} = e.target;
{...obj, [name]:value}
```

```jsx
// Test.jsx

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
```

```jsx
// LoginForm.jsx

import styled from "@emotion/styled";
import React from "react";
import InputField from "./form/InputField";
// 전역 자리
const FormContainer = styled.div`
  width: 100%;
  padding: 25px;
  max-width: 400px;
  margin: 30px auto;
  border-radius: 16px;
  border-color: #fafafa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const ErrorText = styled.div`
  color: #f00;
  margin-top: 10px;
  font-size: 12px;
`;
const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  max-width: 100px;
  margin: 0px auto;
  display: block;
  border-radius: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
function LoginForm({ formData, errorMsg, handleChange, handleSubmit }) {
  return (
    <FormContainer>
      <form onSubmit={handleChange}>
        <InputField
          label="아이디"
          type="text"
          name="user_id"
          id="user_id"
          value={formData.user_id}
          placeholder="아이디를 입력해주세요."
          onChange={handleChange}
        />
        <InputField
          label="이메일"
          type="email"
          id="user_email"
          name="user_email"
          value={formData.user_email}
          placeholder="이메일을 입력하세요."
          onChange={handleChange}
        />
        <InputField
          label="비밀번호"
          type="password"
          id="user_pw"
          name="user_pw"
          value={formData.user_pw}
          placeholder="비밀번호를 입력해주세요."
          onChange={handleChange}
        />
        <br />
      </form>
      <SubmitButton type="submit">로그인</SubmitButton>
      <ErrorText>{errorMsg}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
```

```jsx
// InputField.jsx

import styled from "@emotion/styled";
import React from "react";
// 전역 자리
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;
const StyledLabel = styled.label`
  font-size: 12px;
  display: block;
  padding-left: 10px;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
  min-width: 50px;
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
function InputField({ label, type, name, id, value, placeholder, onChange }) {
  // js

  // jsx
  return (
    <InputGroup>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputField;
```
