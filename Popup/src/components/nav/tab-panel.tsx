import React from 'react';
import {Box, Typography} from "@material-ui/core";

const TabPanel = (props: PropTypes) => {
  const { value, index, children } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

interface PropTypes {
  value: number
  index: number
  children: JSX.Element
}

export default TabPanel;
