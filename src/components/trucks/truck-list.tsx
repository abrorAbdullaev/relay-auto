import React from 'react';
import {Box, Divider, List, Paper} from "@material-ui/core";
import styled from "styled-components";
import { Truck, Trucks } from "../../models/truck";
import TruckListItem from "./truck-list-item";
import NoTrucks from "./no-trucks";
import AddTruckButton from "./add-truck-button";

const TruckList = (props: PropTypes) => {
  const { trucks, onAddTruck, onEditTruck, onRemoveTruck } = props;
  const mappedTrucks: Truck[] = Object.keys(trucks).map(id => trucks[id]);

  return (
    <Wrapper>
      <ListHeader
        display="flex"
        justifyContent="flex-end"
      >
        <AddTruckButton
          onAddTruck={onAddTruck}
        />
      </ListHeader>
      <Divider />
      {
        mappedTrucks.length
        ? (
          <ListBody>
            {
              mappedTrucks.map((truck, index) => (
                <TruckListItem
                  key={index}
                  truck={truck}
                  onEditTruck={(name: string) => onEditTruck(truck.id, name)}
                  onRemoveTruck={() => onRemoveTruck(truck.id)}
                />
              ))
            }
          </ListBody>
        )
        : <NoTrucks />
      }
    </Wrapper>
  );
};

const Wrapper = styled(Paper)`
  width: 100%;
  margin-top: 25px;
  background: #fff;
  height: 300px;
  max-height: 300px;
  overflow: auto;
`;

const ListHeader = styled(Box)`
  padding: 10px;
`;

const ListBody = styled(List)`
  padding-bottom: 0 !important;
`;

interface PropTypes {
  trucks: Trucks
  onAddTruck: () => void
  onEditTruck: (id: string, name: string) => any
  onRemoveTruck: (id: string) => any
}

export default TruckList;
