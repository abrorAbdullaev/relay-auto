import React, { ChangeEvent, useState } from 'react';
import { Truck } from "../../models/truck";
import {Divider, IconButton, InputBase, ListItem, ListItemSecondaryAction} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import styled from "styled-components";

const TruckListItem = (props: PropTypes) => {
  const { truck, onEditTruck, onRemoveTruck } = props;
  const [ isEditing, setEditingMode ] = useState<boolean>(false);
  const [ inputValue, setInputValue ] = useState<string>(truck.name || "");

  const confirmEditing = () => {
    onEditTruck(inputValue);
    setEditingMode(false);
  }

  const cancelEditing = () => {
    setInputValue(truck.name);
    setEditingMode(false);
  }

  const onEditItem = () => {
    setInputValue(truck.name);
    setEditingMode(true);
  }

  return (
    <>
      <ListItem>
        {
          <Input
            placeholder="Name"
            readOnly={!isEditing}
            value={isEditing ? inputValue : truck.name}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
          />
        }
        <ListItemSecondaryAction>
          {
            isEditing
            ? (
              <>
                <IconButton aria-label="edit" onClick={confirmEditing}>
                  <CheckIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={cancelEditing}>
                  <CloseIcon />
                </IconButton>
              </>
            )
            : (
              <>
                <IconButton aria-label="edit" onClick={onEditItem}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={onRemoveTruck}>
                  <DeleteIcon />
                </IconButton>
              </>
            )
          }
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};

const Input = styled(InputBase)`
  width: 100%;
`;

interface PropTypes {
  truck: Truck
  onEditTruck: (name: string) => any
  onRemoveTruck: () => any
}

export default TruckListItem;
