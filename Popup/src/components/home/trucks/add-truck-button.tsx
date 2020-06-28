import React from 'react';
import { Button, PropTypes } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddTruckButton = (props: PropTypes) => {
  const { onAddTruck } = props;

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onAddTruck}
    >
      Add
      <AddIcon />
    </Button>
  );
};

interface PropTypes {
  onAddTruck: () => void
}
export default AddTruckButton;
