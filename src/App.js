import React from 'react';
import styled from 'styled-components';
import Layout from './styles/Organisms/Layout';
import SearchForm from './styles/Molecules/SearchForm';
import ResultList from './styles/Organisms/ResultList';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Header from './styles/Organisms/Header';
import { H1 } from './styles/Atoms/Headings';
import Nav from './styles/Molecules/Navigation';
import Main from './styles/Templates/Main';
import RegularSection from './styles/Templates/RegularSection';

import About from './pages/about';
import Add from './pages/add';
import Support from './pages/support';
import Details from './pages/details';
import Manage from './manage/manage';

const HeaderTop = styled.div`
    background-color: ${({ theme }) => theme.colors.grey};
    text-align: right;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formTextValue: "",
      serverResponse: []
    };
  }

  callServer() {
    if(this.state.formTextValue === "") {
      return;
    }

    const url = new URL("http://localhost:8000/search");
    const params = {query: this.state.formTextValue};

    url.search = new URLSearchParams(params).toString();

    fetch(url)
        .then(res => res.json())
        .then(res => this.setState({ serverResponse: res }));
  }

  handleSubmit = () => {
    this.callServer()
  }

  handleChange = (data) => {
    this.setState({formTextValue: data});
  }

  Home = () => (
    <Main>
      <RegularSection>
        <SearchForm onFormSubmit={this.handleSubmit} onFormValueChange={this.handleChange}/>
        <ResultList cardsData={this.state.serverResponse} />
      </RegularSection>
    </Main>
  )

  render () {

    return (
      <Layout>
        <Router>
          <Header>
            <HeaderTop>
                <RegularSection as={Nav}>
                    <Link to="/">Home</Link>
                    <Link to="/support">Wesprzyj</Link>
                    <Link to="/about">O projekcie</Link>
                    <a href="//codeforheaven.com">Autor</a>
                </RegularSection>
            </HeaderTop>
            <RegularSection style={{ margin: "7.2vw auto"}}>
                <H1>Szukaj Słowa<span>!</span></H1>
            </RegularSection>
          </Header>
          <Switch>
            <Route path="/" exact component={this.Home} />
            <Route path="/add" exact component={Add} />
            <Route path="/support" component={About} />
            <Route path="/about" component={Support} />
            <Route path="/details/:id" component={Details} />
            <Route path="/manage" component={Manage} />
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;
