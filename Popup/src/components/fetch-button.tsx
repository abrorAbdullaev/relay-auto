import React from 'react';
import { Button } from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { updateSearchingState } from "../actions/config";

const FetchButton = (props: PropTypes) => {
  const { isSearching, onDispatch } = props;

  const toggleSearching = () => {
    onDispatch(updateSearchingState(!isSearching));
  };

  return (
    <>
      {
        !isSearching ? (
          <Button
            variant="contained"
            color="primary"
            endIcon={<PlayArrowIcon />}
            onClick={toggleSearching}
          >
            Start
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            endIcon={<StopIcon />}
            onClick={toggleSearching}
          >
            Stop
          </Button>
        )
      }
    </>
  );
};

interface PropTypes {
  isSearching: boolean
  onDispatch: Function
}

export default FetchButton;