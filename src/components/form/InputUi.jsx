import styled from "@emotion/styled";
import React from "react";
// 전역 자리 (window) : 리렌더링 반영 안됨
// styled 코드 자리
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
const Label = styled.label`
  font-size: 11px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  min-width: 80px;
`;
const InputStyled = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;

  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;

function InputUi({ id, type, name, value, placeholder, label }) {
  // js

  // jsx
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}</Label>
      <InputStyled
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </InputGroup>
  );
}

export default InputUi;
