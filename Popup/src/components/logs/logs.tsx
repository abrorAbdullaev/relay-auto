import Box from "@material-ui/core/Box";
import styled from "styled-components";
import React, { useContext } from 'react';
import { AppDataContext } from "../../store/app-data-context";
import LogItem from "./log-item";

const Logs = () => {
  const { logs } = useContext(AppDataContext);

  return (
    <div>
      <h2>Logs</h2>
      <Wrapper>
        {logs.map((log) => <LogItem log={log} />)}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled(Box)`
  padding: 30px 50px;
  width: 100%;
  background-color: white;
  overflow: auto;
  max-height: 420px;
`;

export default Logs;
