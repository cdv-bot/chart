import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './component/main';
import Menu from './component/menu';
import Page from './router';


function App() {
  const PageRouter = (Page) => {
    let result = null;
    result = Page.map((value, key) => (
      <Route
        key={key}
        exact={value.exact}
        path={value.path}
        render={props => <value.main {...props} />}
      />
    ));
    return result;
  }
  return (
    <Router>
      <Menu />
      <Main />
      <Switch>
        {
          PageRouter(Page)
        }
      </Switch>
    </Router >
  );
}

export default App;
