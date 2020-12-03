import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './assets/layouts/Layout';

import Header from './styles/Organisms/Header';
import { H1 } from './styles/Atoms/Headings';
import RegularSection from './styles/Templates/RegularSection';

import About from './pages/about';
import Add from './pages/add';
import Home from './pages/Home';
import Details from './pages/details';
import Manage from './manage/manage';
import Support from './pages/support';

const App = () => (
  <Layout>
    <Router>
      <Header>
        <RegularSection>
          <H1 superBig>
            <Link to="/">
              Szukaj Słowa
              <span>!</span>
            </Link>
          </H1>
        </RegularSection>
      </Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={Add} />
        <Route path="/support" component={About} />
        <Route path="/about" component={Support} />
        <Route path="/details/:id" component={Details} />
        <Route path="/manage" component={Manage} />
      </Switch>
    </Router>
  </Layout>
);

export default App;
