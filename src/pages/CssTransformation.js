import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 20px;
  border-radius: 5px;
  position: absolute;
  width: 100vh;
  z-index: 10000;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 10rem;
  justify-content: center;
  align-items: center;
`;

const A =styled.a`

`;

const Button = styled.button`
outline: none;
  border: 1px solid #555;
  padding: 2rem 5rem;
`;


function CssTransformation() {
  return (
    <Container>
      <Wrapper>
        <A href="//google.com">google</A>
        <Button className="btn">click me</Button>
      </Wrapper>
    </Container>
  )
}

export default CssTransformation;
