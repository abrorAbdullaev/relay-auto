import React from 'react';
import styled from "styled-components";
import {Box} from "@material-ui/core";

const Greetings = () => {
  return (
    <Wrapper>
      <Message>
        Relay Auto 📦
      </Message>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6498FE;
`

const Message = styled(Box)`
  font-weight: bold;
  display: block;
  font-size: 40px;
  color: #fff;
`

export default Greetings;
