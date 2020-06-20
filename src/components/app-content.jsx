import React, { useContext } from 'react';
import styled from "styled-components";
import TrucksWrapper from "./trucks/trucks-wrapper";
import { AppDataContext } from "../store/app-data-context";
import FetchButton from "./fetch-button";
import Box from "@material-ui/core/Box";

const AppContent = () => {
  const { trucks, dispatch } = useContext(AppDataContext);

  return (
    <Wrapper
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <FetchButton/>
      <TrucksWrapper
        trucks={trucks}
        onDispatch={dispatch}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  padding: 50px 100px 0;
  width: 100%;
`;

export default AppContent;
