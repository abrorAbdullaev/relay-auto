import React from 'react';
import {Box} from "@material-ui/core";
import styled from "styled-components";

const NoTrucks = () => {
  return (
    <Wrapper>
      <Box
        fontWeight={500}
        fontSize={20}
      >
        You have no trucks yet.
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;
export default NoTrucks;
