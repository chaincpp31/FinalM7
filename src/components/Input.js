import React, { useState } from "react";
import styled from "styled-components";

const BaseInput = styled.input`
  outline: none;
  border: none;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

const InputContainer = styled.form`
  display: flex;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const StyledInput = styled(BaseInput)`
  color: white;
  width: 100%;
  transition: border-bottom 0.3s;
`;

function Input({ onSubmit = () => null }, { children }) {
  const handleInputChange = (event) => setValue(event.target.value);

  return (
    <InputContainer onSubmit={handleSubmit}>
      <StyledInput
        value={value}
        onChange={handleInputChange}
        placeholder={children}
      />
    </InputContainer>
  );
}

export default Input;
