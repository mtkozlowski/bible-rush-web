import React from 'react';
import Main from '../styles/Templates/Main';
import RegularSection from '../styles/Templates/RegularSection';
import ResultList from '../styles/Organisms/ResultList';
import SearchForm from '../styles/Molecules/SearchForm';
import SearchHelper from '../styles/Molecules/SearchHelper';
import recognizeSiglum from '../tasks/recognizeSiglum';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formTextValue: '',
      serverResponse: [],
      recognizedSiglum: {},
    };
  }

  handleChange(data) {
    let recognized = '';
    try {
      recognized = recognizeSiglum(data);
    } catch (err) {
      console.log(err);
    }
    this.setState({
      formTextValue: data,
      recognizedSiglum: recognized,
    });
  }

  handleSubmit() {
    this.callServer();
  }

  callServer() {
    const { formTextValue } = this.state;
    if (formTextValue === '') {
      return;
    }

    const url = new URL('http://localhost:8000/search');
    const params = { query: formTextValue };

    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ serverResponse: res }));
  }

  render() {
    const { recognizedSiglum, serverResponse } = this.state;
    return (
      <Main>
        <RegularSection>
          <SearchForm
            onFormSubmit={this.handleSubmit}
            onFormValueChange={this.handleChange}
          />
          <SearchHelper recognizedSiglum={recognizedSiglum} />
          <ResultList cardsData={serverResponse} />
        </RegularSection>
      </Main>
    );
  }
}

export default Home;
