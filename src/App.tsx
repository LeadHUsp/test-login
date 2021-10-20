import React from 'react';

import Container from '@mui/material/Container';

import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Profile } from './components/Profile';
import { SignIn } from './components/SignIn';

function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <Container maxWidth='lg'>
      <Switch>
        <PrivateRoute exact path='/profile' component={Profile} isAuth={isAuth} />
        <Route path='/' component={SignIn} />
      </Switch>
    </Container>
  );
}

export default App;
