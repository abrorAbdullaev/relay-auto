import React, { useMemo, useState } from 'react';
import ShowTruckListButton from "./show-truck-list-button";
import TruckList from "./truck-list";
import { Trucks } from "../../../models/truck";
import {addTruck, editTruck, removeTruck} from "../../../actions/trucks";
import styled from "styled-components";

const TruckListWrapper = (props: PropTypes) => {
  const { trucks, onDispatch } = props;

  const onAddTruck = () => onDispatch(addTruck(""));
  const onEditTruck = (id: string, name: string) => onDispatch(editTruck(id, name));
  const onRemoveTruck = (id: string) => onDispatch(removeTruck(id));

  return (
    <Wrapper>
      <TruckList
        trucks={trucks}
        onAddTruck={onAddTruck}
        onEditTruck={onEditTruck}
        onRemoveTruck={onRemoveTruck}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  margin-top: 50px;
`;

interface PropTypes {
  trucks: Trucks
  onDispatch: (...args: any) => any
}

export default TruckListWrapper;
