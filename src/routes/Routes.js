import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Routes.style.js';
import NewsPage from 'src/pages/news/news-page';
import Register from '../pages/Register';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/news' exact component={NewsPage} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
