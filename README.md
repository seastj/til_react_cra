# useEffect

## 1. 특징

- 리렌더링에서 제외되는 Hook
- Hook 은 `컴포넌트에서 자동 실행되는 함수`
- useState 에서 만든 리액트 변수 출력, 즉, 리액트변수 확인하기
- 백엔드 비동기 통신, 즉, fetch 함수를 호출

## 2. 작동/실행 이 되는 3가지 경우

### 2.1. 컴포넌트가 화면에 보여질 때(렌더링)

- 딱 한번만 실행됨

```js
useEffect(() => {
  // 딱 한번만 실행되면 좋겠다.
}, []);
```

### 2.2. 계속 실행 되는 경우 (리렌더링)

```js
useEffect(() => {
  // 계속 하고 싶은 일.
}, [리액트변수]);
```

### 2.3. 컴포넌트가 사라질 때 (화면에서 제거될때)

- 클린업 함수 자리

```js
useEffect(() => {
  // 딱 한번만 실행하기
  // 딱 한번만 실행하기
  // 딱 한번만 실행하기
  return () => {
    // 사라질때 하고 싶은일
  };
}, []);
```

```js
useEffect(() => {
  // 계속 실행하기
  // 계속 실행하기
  // 계속 실행하기
  return () => {
    // 사라질때 하고 싶은일
  };
}, [리액트변수]);
```

## 3. 이해를 해보자

```js
useEffect(() => {
  window.addEventListenr("resize", function () {
    // 실행할일
  });
  window.addEventListenr("scroll", function () {
    // 실행할일
  });

  // 클린업 함수
  return () => {
    window.removeEventListenr("resize", function () {
      // 실행할일
    });
    window.removeEventListenr("scroll", function () {
      // 실행할일
    });
  };
}, []);
```

```js
import React, { useEffect, useState } from "react";
// 전역(window) 자리
function Test() {
  // js
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("안녕.나는 처음이지?");
    return () => {
      console.log("다음 생에 만나요.");
    };
  }, []);

  useEffect(() => {
    console.log(`${count}이군요. 하하`);
    return () => {
      console.log("잘계세요.");
    };
  }, [count]);
  // jsx
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>점수</button>
    </div>
  );
}

export default Test;
```
