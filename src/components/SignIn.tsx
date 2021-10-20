import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, setLogin, setPas } from '../store/ducks/auth/actions';
import { Redirect } from 'react-router-dom';
export const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const login = useSelector((state: RootState) => state.auth.login);
  const pas = useSelector((state: RootState) => state.auth.pas);

  const [curr, setCurr] = useState<boolean>(true);
  const handleChangeLogin = (event: any) => {
    dispatch(setLogin(event.currentTarget.value));
  };
  const handleChangePas = (event: any) => {
    setPas(event.currentTarget.value);
    dispatch(setPas(event.currentTarget.value));
  };
  useEffect(() => {
    login === 'developer21' && pas === '123456' ? setCurr(false) : setCurr(true);
  }, [login, pas]);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(signIn());
  };
  return isAuth ? (
    <Redirect
      to={{
        pathname: '/profile',
      }}
    />
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
        container
        alignItems='center'
        spacing={2}
        sx={{ minHeight: '100vh' }}>
        <Grid container justifyContent='center' item xs={12}>
          <Grid container justifyContent='center' item xs={12}>
            <Box sx={{ padding: '15px' }}>
              <TextField
                id='standard-basic'
                label='Login'
                variant='standard'
                name='login'
                value={login}
                onChange={handleChangeLogin}
              />
            </Box>
          </Grid>
          <Grid container justifyContent='center' item xs={12}>
            <Box sx={{ padding: '15px' }}>
              <TextField
                id='standard-basic'
                label='Password'
                variant='standard'
                name='pas'
                value={pas}
                onChange={handleChangePas}
              />
            </Box>
          </Grid>{' '}
          <Grid container justifyContent='center' item xs={12}>
            <Box sx={{ padding: '15px' }}>
              <Button variant='outlined' type='submit' disabled={curr}>
                Sign in
              </Button>
            </Box>
          </Grid>{' '}
        </Grid>
      </Grid>
    </Box>
  );
};
