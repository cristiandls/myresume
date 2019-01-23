import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Loading from '../pages/loading';

const AsyncHome = importedComponent(() => import('../pages/home'), { LoadingComponent: Loading });
const AsyncNoMatch = importedComponent(() => import('../pages//nomatch'), { LoadingComponent: Loading });

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route component={AsyncNoMatch} />
      </Switch>
    </Router>
  );
};

export default Routes;
