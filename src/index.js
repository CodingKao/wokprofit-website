import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style.css';
import Home from './views/home';
import NotFound from './views/not-found';

const App = () => {
  return (
    // Add basename so React Router works on GitHub Pages/custom domain
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="*" />
      </Switch>
    </BrowserRouter>
  );
};

// Make sure your root element ID matches your index.html
ReactDOM.render(<App />, document.getElementById('app'));