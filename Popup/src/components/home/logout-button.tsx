import React, { useContext } from 'react';
import { Button } from "@material-ui/core";
import { updateLoginState } from "../../actions/config";
import { AppDataContext } from "../../store/app-data-context";

const LogoutButton = () => {
  const { dispatch } = useContext(AppDataContext);

  const logout = () => {
    dispatch(updateLoginState(false));
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={logout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
