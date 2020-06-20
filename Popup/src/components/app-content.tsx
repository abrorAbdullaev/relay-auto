import React, { useContext } from 'react';
import styled from "styled-components";
import TruckListWrapper from "./trucks/truck-list-wrapper";
import { AppDataContext } from "../store/app-data-context";
import FetchButton from "./fetch-button";
import Box from "@material-ui/core/Box";
import Login from "./login/login";

const AppContent = () => {
  const { trucks, isLoggedIn, dispatch } = useContext(AppDataContext);

  return (
    isLoggedIn ? (
      <Wrapper
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <FetchButton/>
        <TruckListWrapper
          trucks={trucks}
          onDispatch={dispatch}
        />
      </Wrapper>
    ) : (
      <Login
        onDispatch={dispatch}
      />
    )
  );
};

const Wrapper = styled(Box)`
  padding: 50px 100px 0;
  width: 100%;
`;

export default AppContent;