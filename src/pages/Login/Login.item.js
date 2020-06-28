import React, { useEffect, useState } from 'react';
import {
  Button,
  InputAdornment,
  IconButton,
  ThemeProvider,
  TextField
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStyles, defaultTheme } from './Login.styles';
import {
  placeholders,
  OR_TEXT,
  LANGUAGE as language,
  LOGIN_FORM_LABEL,
  LOGIN_USER_DATA
} from '../../configs';
import loginUser from '../../services/loginUser';

const Login = () => {
  // VALUES
  const [user, setUser] = useState(LOGIN_USER_DATA);
  const [loginError, setLoginError] = useState(false);
  const [allFieldsSet, setAllFieldsSet] = useState(false);

  // VALIDATE
  const [shouldValidate, setShouldValidate] = useState(false);

  // SHOW PASSWORDS
  const [showPassword, setShowPassword] = useState(false);

  // LABELS
  const label = LOGIN_FORM_LABEL[language].value;
  const emailLabel = placeholders.email[language].value;
  const passwordLabel = placeholders.password[language].value;

  // HANDLERS
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleLogin = async () => {
    setShouldValidate(true);
    if (allFieldsSet) {
      try {
        const response = await loginUser(user);
        if (response.data.errors) {
          setLoginError(true);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  // EYE TOGGLE
  function toggleInputType(e, showPass) {
    const input = e.currentTarget.parentElement.previousSibling;
    if (input.type === 'password') {
      input.type = 'text';
      showPass(false);
    } else {
      input.type = 'password';
      showPass(true);
    }
  }

  // EYE
  function endAdornment(isVisible, setShowPass) {
    return {
      endAdornment: (
        <InputAdornment position='end'>
          <IconButton
            aria-label='toggle password visibility'
            onClick={(e) => toggleInputType(e, setShowPass)}
          >
            {isVisible ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      )
    };
  }

  // HOOKS
  useEffect(() => {
    if (Object.values(user).every((val) => val !== '')) {
      setAllFieldsSet(true);
    } else {
      setAllFieldsSet(false);
    }
  }, [user]);

  // CLASSES
  const classes = useStyles();
  const {
    login,
    loginWrapper,
    loginForm,
    heading,
    passwordInput,
    loginBtn,
    loginGroup,
    recoveryBtn,
    recoveryContainer,
    emailInput,
    orContainer,
    orText,
    googleBtn,
    registrContainer,
    registrBtn,
    googleLogo,
    disabledLogin
  } = classes;

  const { email, password } = user;

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={login}>
        <div className={loginWrapper}>
          <form className={loginForm}>
            <h2 className={heading}>{LOGIN_FORM_LABEL[language].value}</h2>
            <TextField
              label={emailLabel}
              className={emailInput}
              fullWidth
              variant='outlined'
              type='text'
              name='email'
              value={email}
              error={!email && shouldValidate}
              required
              onChange={handleChange}
              helperText={!email && shouldValidate ? 'Empty field' : ''}
            />
            <TextField
              label={passwordLabel}
              className={passwordInput}
              fullWidth
              variant='outlined'
              type='password'
              InputProps={endAdornment(showPassword, setShowPassword)}
              name='password'
              value={password}
              error={!password && shouldValidate}
              required
              onChange={handleChange}
              helperText={!password && shouldValidate ? 'Empty field' : ''}
            />
            <div className={recoveryContainer}>
              <Link to='/recovery' className={recoveryBtn}>
                Forgot password?
              </Link>
            </div>
            <div className={loginGroup}>
              <Button
                className={allFieldsSet ? loginBtn : disabledLogin}
                fullWidth
                onClick={handleLogin}
                disabled={!allFieldsSet}
              >
                {label}
              </Button>
              <p className={classes.loginError}>
                {loginError ? 'Wrong e-mail address or password' : ''}
              </p>
            </div>
            <div className={orContainer}>
              <span className={orText}>{OR_TEXT[language].value}</span>
            </div>
            <Button className={googleBtn} fullWidth>
              <span className={googleLogo} />
              Google
            </Button>
            <div className={registrContainer}>
              <Link to='/register' className={registrBtn}>
                Registration
              </Link>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
