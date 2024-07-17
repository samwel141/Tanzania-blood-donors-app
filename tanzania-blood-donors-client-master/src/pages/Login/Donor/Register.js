import React, { useState } from 'react';
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

import IconLogo from '../../../components/UI/iconLogo';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FlexDiv } from '../../../components/UI/common/commonStyled';
import { Loader } from '../../../components/UI/common/Loader/Loader';
import Message from '../../../components/UI/common/Message/Message';
import { MessageType } from '../../../components/UI/common/Message/Message';
import { validateUsername, validatePassword } from './LoginValidators';



// import React from 'react';
import { FormControl, FormLabel, RadioGroup, Radio } from '@mui/material';
import { styled } from '@mui/system';


const DonorRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRemember, setRemember] = useState(true);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState('');


  const StyledFormControl = styled(FormControl)(({ theme }) => ({
    marginTop: theme.spacing(2),
  }));



  const handleUsernameBlur = (value) => value ? validateUsernameInput(username) : setUsernameError('');

  const handlePasswordBlur = (value) => value ? validatePasswordInput(password) : setPasswordError('');

  

  const validateUsernameInput = (value) => {
    const error = validateUsername(value);
    setUsernameError(error);
  };

  const validatePasswordInput = (value) => {
    const error = validatePassword(value);
    setPasswordError(error);
  };



  const handleUsernameChange = (event) => {
    //   setusername(event.target.value);
    //   validateusernameInput(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePasswordInput(event.target.value);
  };



  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };


  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    //   if (username && password) {
    //     login();
    //   }
    return false;
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <FlexDiv flexDirection="column">
          <IconLogo />
          <Box m={2} />
          <Typography variant="h3">Donor Registration</Typography>
        </FlexDiv>
        <StyledForm onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="Firstname"
            name="firstname"
            autoComplete="firstname"
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
            id="middlename"
            label="Middlename"
            name="middlename"
            autoComplete="middlename"
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
            id="sirname"
            label="Sirname"
            name="sirname"
            autoComplete="sirname"
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
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
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



          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            onFocus={() => handleUsernameBlur(false)}
            onBlur={() => handleUsernameBlur(true)}
            helperText={usernameError}
            error={!!usernameError}
            onChange={handleUsernameChange}
            value={username}
          />

            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="gender"
                value={gender}
                onChange={handleGenderChange}
                row
            >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="region"
            label="Region"
            name="region"
            autoComplete="region"
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
            id="date-of-birth"
            label="Date of Birth"
            type="date"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            InputLabelProps={{
            shrink: true,
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
            // disabled={isLoading || !username || !password}
          >
            <StyledTypography>REGISTER</StyledTypography>
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

export default DonorRegister;
