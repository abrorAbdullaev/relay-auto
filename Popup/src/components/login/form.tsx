import React, {ChangeEvent, FormEvent, useState} from 'react';
import styled from "styled-components";
import { Box, Button, TextField } from "@material-ui/core";

const Form = (props: PropTypes) => {
  const { onSubmit } = props;
  const [ login, setLogin ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    // TODO: Validation
    event.preventDefault();
    onSubmit({ login, password });
  }

  return (
    <FormWrapper>
      <FormWrapperInner
        name="login-form"
        onSubmit={handleSubmit}
      >
        <LoginField
          label="Login"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
        />
        <PasswordField
          label="Password"
          type="password"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
        />
        <LoginButton
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </LoginButton>
      </FormWrapperInner>
    </FormWrapper>
  );
};

const FormWrapper = styled(Box)`
  width: 40%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const FormWrapperInner = styled.form`
  width: 100%;
  margin-top: -40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const LoginField = styled(TextField)`
  width: 100%;
`;

const PasswordField = styled(TextField)`
  width: 100%;
`;

const LoginButton = styled(Button)`
  margin-top: 30px !important;
`;

interface PropTypes {
  onSubmit: (userData :{ login: string, password: string }) => any
}

export default Form;
