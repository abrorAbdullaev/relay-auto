import React, { useContext } from 'react';
import styled from "styled-components";
import TruckListWrapper from "./trucks/truck-list-wrapper";
import { AppDataContext } from "../../store/app-data-context";
import IoButton from "./io-button";
import Box from "@material-ui/core/Box";
import LogoutButton from './logout-button';

const Home = () => {
  const { trucks, isSearching, dispatch } = useContext(AppDataContext);

  return (
    <div>
      <Wrapper
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Wrapper display="flex" alignItems="center">
          <IoButton
            isSearching={isSearching}
            onDispatch={dispatch}
          />
          <LogoutButton />
        </Wrapper>
        <TruckListWrapper
          trucks={trucks}
          onDispatch={dispatch}
        />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled(Box)`
  padding: 50px 100px 0;
  width: 100%;
`;

export default Home;
