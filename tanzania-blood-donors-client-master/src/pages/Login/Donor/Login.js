import React, { useContext, useState } from 'react';
import {
  Box,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import { StyledButton, StyledContainer, StyledForm, StyledTypography } from './Login.styled';
import apiClient from '../../../utils/apiClient';

import IconLogo from '../../../components/UI/iconLogo';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FlexDiv } from '../../../components/UI/common/commonStyled';
import { Loader } from '../../../components/UI/common/Loader/Loader';
import Message from '../../../components/UI/common/Message/Message';
import { MessageType } from '../../../components/UI/common/Message/Message';
import { validateUsername, validatePassword } from './LoginValidators';
import AuthContext from '../../../store/auth-context';
import { useNavigate } from 'react-router';



const DonorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRemember, setRemember] = useState(true);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameBlur = (value) => value ? validateUsernameInput(username) : setUsernameError('');

  const handlePasswordBlur = (value) => value ? validatePasswordInput(password) : setPasswordError('');

  const authContext = useContext(AuthContext)

  const navigate = useNavigate()

  const validateUsernameInput = (value) => {
    const error = validateUsername(value);
    setUsernameError(error);
  };

  const validatePasswordInput = (value) => {
    const error = validatePassword(value);
    setPasswordError(error);
  };


  const handleUsernameChange = (event) => {
      setUsername(event.target.value);
      validateUsernameInput(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePasswordInput(event.target.value);
  };



  const login = () => {
    setIsLoading(true);

    apiClient
      .post('/donors/login', {
        username,
        password,
      },
      // {
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }
      ).then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          navigate('/')
          // authContext.login(token, isRemember);
        } else {
          setErrorMessage('Invalid username or password');
        }
      })
      .catch((error) => {
        console.error('Undefined username error:', error);
        setErrorMessage(
          error.response?.data?.errorMessage ||
            'Could not log in. Please check your username, password or contact the admin.'
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };





  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
      if (username && password) {
        login();
      }
    return false;
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <FlexDiv flexDirection="column">
          <IconLogo />
          <Box m={2} />
          <Typography variant="h3">Login as Donor</Typography>
        </FlexDiv>
        <StyledForm onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            onFocus={() => handleUsernameBlur(false)}
            onBlur={() => handleUsernameBlur(true)}
            helperText={usernameError}
            error={!!usernameError}
            onChange={handleUsernameChange}
            value={username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            onFocus={() => handlePasswordBlur(false)}
            onBlur={() => handlePasswordBlur(true)}
            helperText={passwordError}
            error={!!passwordError}
            onChange={handlePasswordChange}
            value={password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(event) => event.preventDefault()}
                    name="password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Grid container justifyContent="space-between">
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    checked={isRemember}
                    onClick={() => setRemember(!isRemember)}
                    value="remember"
                    color="primary"
                  />
                }
                label="Remember me"
              />
            </Grid>
          </Grid>
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //Disable button if sending request, username or password are empty
            disabled={isLoading || !username || !password}
          >
            <StyledTypography>LOG IN</StyledTypography>
          </StyledButton>
          {isLoading && (
            <FlexDiv>
              <Loader />
            </FlexDiv>
          )}
          {errorMessage && (
            <Message
              message={errorMessage}
              onClose={() => setErrorMessage('')}
              messageType={MessageType.ERROR}
            />
          )}
        </StyledForm>
      </div>
    </StyledContainer>
  );
};

export default DonorLogin;
