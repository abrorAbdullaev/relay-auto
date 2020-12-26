import React from 'react';
import { ListItemText } from '@material-ui/core';
import styled from 'styled-components';
import { Log, LogTypes } from '../../models/log';

const LogItem = (props: PropTypes) => {
  return (
    <LogListItem className={`${props.log.type}`}>
      <span>{props.log.text}</span>
    </LogListItem>
  );
}

interface PropTypes {
  log: Log,
};

const LogListItem = styled(ListItemText)`
  padding: 5px;
  transition: .3s background, .3s color;
  background: transparent;

  &:hover {
    ${props => !!props.className && props.className === String(LogTypes.ERROR)
    ? 'color: white; background: linear-gradient(#CB356B, #BD3F32);' : ''}
    ${props => !!props.className && props.className === String(LogTypes.WARN)
    ? 'color: #0c2983; background: linear-gradient(#F2994A, #F2C94C);' : ''}
    ${props => !!props.className && props.className === String(LogTypes.INFO)
    ? 'color: white; background: linear-gradient(#DCE35B, #45B649);' : ''}
    cursor: pointer;
  }
`;

export default LogItem;
