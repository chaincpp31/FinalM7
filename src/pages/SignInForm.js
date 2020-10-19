import React from "react";
import styled from "styled-components";

const Title = styled.div``;

const Text = styled.div`
  margin: 0.5rem;
`;
const Input = styled.input`
  border: 1px solid black;
  border-radius: 5%;
`;

function SigninForm() {
  return (
    <>
      <Title>Signin Form</Title>
      <Text>
        Username
        <Input name="username" />
      </Text>
      <Text>
        Password
        <Input />
      </Text>
      <button type="submit" alert="">
        Submit
      </button>
    </>
  );
}

export default SigninForm;
