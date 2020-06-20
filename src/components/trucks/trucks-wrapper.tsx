import React, { useMemo, useState } from 'react';
import ShowTrucksListButton from "./show-trucks-list-button";
import TrucksList from "./trucks-list";
import { Trucks } from "../../models/truck";
import {addTruck, editTruck, removeTruck} from "../../actions/trucks";
import styled from "styled-components";

const TrucksWrapper = (props: PropTypes) => {
  const { trucks, onDispatch } = props;
  const [ isTrucksListShown, toggleTrucksListVisibility ] = useState<boolean>(false);

  const onAddTruck = () => onDispatch(addTruck(""));
  const onEditTruck = (id: string, name: string) => onDispatch(editTruck(id, name));
  const onRemoveTruck = (id: string) => onDispatch(removeTruck(id));

  return (
    <Wrapper>
      <ShowTrucksListButton
        isTrucksListShown={isTrucksListShown}
        onTrucksListOpen={() => toggleTrucksListVisibility(!isTrucksListShown)}
      />
      {
        isTrucksListShown
          ? (
            <TrucksList
              trucks={trucks}
              onAddTruck={onAddTruck}
              onEditTruck={onEditTruck}
              onRemoveTruck={onRemoveTruck}
            />
          )
          : null
      }
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

export default TrucksWrapper;
