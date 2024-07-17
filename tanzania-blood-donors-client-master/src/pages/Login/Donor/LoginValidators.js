const validateUsername = (value) => {
    if (!value) {
      return 'This field cannot be empty.';
    }
  
    return value.length > 150
      ? 'This field cannot contain more than 150 characters.'
      : '';
  };
  
  const validatePassword = (value) => {
    if (!value) {
      return 'Password cannot be empty.';
    }
  
    return value.length > 50
      ? 'Password cannot contain more than 50 characters.'
      : '';
  };
  


  
  export { validateUsername, validatePassword };