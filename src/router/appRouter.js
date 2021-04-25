import React from 'react';
import Cookies from 'js-cookie';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Menu from '../component/menu';
import Page from '../router';

function AppRouter(props) {
  let { pathname } = useLocation();
  const PageRouter = (Page) => {
    let result = null;
    result = Page.map((value, key) => (
      <Route
        key={key}
        exact={value.exact}
        path={value.path}
        render={(props) => {
          return (
            <>
              <value.main {...props} />
              {Cookies.get('accessToken') ? null : <Redirect to='/login' />}
            </>
          );
        }}
      />
    ));
    return result;
  };
  return (
    <>
      {pathname === '/login' ? '' : <Menu />}
      <Switch>
        <Redirect strict exact from='/' to='/trang-chu' />
        {PageRouter(Page)}
      </Switch>
    </>
  );
}

export default AppRouter;
