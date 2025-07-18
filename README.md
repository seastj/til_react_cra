# useMemo

## 1. 최적화 참고사항 (최적화 해 보셨나요?)

### 1.1. 레이아웃

- Shift Layout 현상을 가능하면 제거
- css 로 꾸준히 작업, npm 으로 가짜배치
- skeleton 레이아웃
- 반응형 코드 꾸준히 작업.

### 1.2. 리액트 성능 최적화

- lazy, suspense 로 로딩처리
- useMemo, uswCallBack, React.memo() 로 판별

### 1.3. SEO 최적화

- meta 태그
- favicon
- title
- 모바일 icon 등등
- GA4 적용

## 2. useMemo

- 개발 중에는 적용하지 않는다.
- 최적화 고민하면서 개발하면 시간이 오래걸린다.
- 개발 중에 틈틈이 최적화 하는것을 권장.

### 2.1. useMemo : 리액트 변수 저장하기

- 성능 이슈 발생 가능함.
  - 문제점
    - `count` 값 변경시
    - 다시 계산할 필요없는 `num * 2` 가 실행됨
  - 원하는 것
  - `num` 값 변할 때만
  - 다시 계산 할 `num * 2` 가 실행됨

```jsx
import React, { useState } from "react";

function App() {
  // js
  console.log("APP : 리렌더링");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // 값을 2배로
  const now = num * 2;
  console.log("now : ", now);

  // jsx
  return (
    <div>
      <h2>count 값 : {count}</h2>
      <h2>num 값 : {num}</h2>
      <h2>now 값 : {now}</h2>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
      <button onClick={() => setNum(num + 1)}>num 증가</button>
    </div>
  );
}

export default App;
```

- 해결 코드

```jsx
import React, { useMemo, useState } from "react";

function App() {
  // js
  console.log("APP : 리렌더링");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // 값을 2배로
  const now = useMemo(() => {
    console.log("now 새로계산");
    return num * 2;
  }, [num]);

  // jsx
  return (
    <div>
      <h2>count 값 : {count}</h2>
      <h2>num 값 : {num}</h2>
      <h2>now 값 : {now}</h2>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
      <button onClick={() => setNum(num + 1)}>num 증가</button>
    </div>
  );
}

export default App;
```

- 코드 최적화 연습

```jsx
import React, { useMemo, useState } from "react";

function App() {
  // js
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const resultFN = useMemo(() => {
    return num * num;
  }, [num]);

  const helloFn = useMemo(() => {
    return text + " 안녕!";
  }, [text]);

  // jsx
  return (
    <div>
      <h1>간단한 계산 출력</h1>
      <div>
        <input
          type="number"
          placeholder="숫자입력"
          value={num}
          onChange={e => setNum(parseInt(e.target.value))}
        />
        <div>{resultFN}</div>
        <h1>글자 최적화</h1>
        <div>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div>{helloFn}</div>
      </div>
    </div>
  );
}

export default App;
```

# useCallback

- 왜 함수를 렌더링 마다 새로 만들지?

- 성능 이슈 발생 가능함.
  - 문제점
    - `count` 값 변경시
    - 다시 만들 필요없는 `const add = () { ... }` 가 만들어짐
  - 원하는 것
  - `const add = () { ... }` 한번만 만들어라.
  - 다시 계산 할 `num * 2` 가 실행됨

```jsx
import React, { useState } from "react";

function App() {
  console.log("App : 리렌더링");
  // js
  const [count, setCount] = useState(0);

  // 과연 add 함수는 다시 정의가 될까?
  const add = () => {
    setCount(count + 1);
  };

  // jsx
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={add}>함수 실행</button>
    </div>
  );
}

export default App;
```

- 성능개선

```jsx
import React, { useCallback, useState } from "react";

function App() {
  console.log("App : 리렌더링");
  // js
  const [count, setCount] = useState(0);

  // 과연 add 함수는 다시 정의가 될까?
  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // jsx
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={add}>함수 실행</button>
    </div>
  );
}

export default App;
```
