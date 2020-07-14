import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewsPage from '../pages/news/news-page';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import NewsDetailPage from '../pages/news/news-detail';
import { useStyles } from './routes.style.js';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';

const Routes = () => {
  const styles = useStyles();

  return (
    <Router>
      <AppHeader />
      <div className={styles.root}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' exact component={NewsPage} />
          <Route path='/news/:id' exact component={NewsDetailPage} />
          <Route path='/about-us' exact component={AboutUs} />
        </Switch>
      </div>
      <AppFooter />
    </Router>
  );
};

export default Routes;
