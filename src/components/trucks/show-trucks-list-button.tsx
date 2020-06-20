import React from 'react';
import { Fab } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ShowTrucksListButton = (props: PropTypes) => {
  const { isTrucksListShown, onTrucksListOpen } = props;

  return (
    <Fab
      variant="extended"
      size="medium"
      color="primary"
      aria-label="show-trucks"
      onClick={onTrucksListOpen}
    >
      Show Trucks
      {
        isTrucksListShown
        ? <ExpandLessIcon />
        : <ExpandMoreIcon />
      }
    </Fab>
  );
};

interface PropTypes {
  isTrucksListShown: boolean
  onTrucksListOpen: () => void
}

export default ShowTrucksListButton;
