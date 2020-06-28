import React, { useContext, useState } from 'react';
import { AppDataContext } from "../store/app-data-context";
import Login from "./login/login";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import TabPanel from "./nav/tab-panel";
import SwipeableViews from "react-swipeable-views";
import Home from "./home/home";
import Logs from "./logs/logs";

const AppContent = () => {
  const { isLoggedIn, dispatch } = useContext(AppDataContext);
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabIndexChange = (index) => {
    setValue(index);
  };

  return (
    isLoggedIn ? (
        <div>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Home" />
              <Tab label="Logs" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis="x"
            index={value}
            onChangeIndex={handleTabIndexChange}
          >
            <TabPanel value={value} index={0}>
              <Home />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Logs />
            </TabPanel>
          </SwipeableViews>
        </div>
    ) : (
      <Login
        onDispatch={dispatch}
      />
    )
  );
};

export default AppContent;