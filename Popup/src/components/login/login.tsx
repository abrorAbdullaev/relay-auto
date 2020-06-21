import React from 'react';
import styled from "styled-components";
import Greetings from "./greetings";
import Form from "./form";
import { updateLoginState } from "../../actions/isLoggedIn";
import { Auth } from "../../services";

const Login = (props: PropTypes) => {
  const { onDispatch } = props;

  // TODO: useCallback?
  const onSubmit = async ({ login, password }: { login: string, password: string }) => {
    const loginStatus = await Auth.login(login, password);

    if (loginStatus) {
      onDispatch(updateLoginState(true));
    }
  };

  return (
    <Wrapper>
      <Greetings/>
      <Form
        onSubmit={onSubmit}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface PropTypes {
  onDispatch: Function
}

export default Login;
