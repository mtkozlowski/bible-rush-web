import React from 'react';
import Layout from './styles/Organisms/Layout';
import SearchForm from './styles/Molecules/SearchForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formTextValue: "",
      serverResponse: ""
    };
  }

  callServer() {
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

  render () {
    return (
      <Layout>
        <SearchForm onFormSubmit={this.handleSubmit} onFormValueChange={this.handleChange}/>
        {this.state.serverResponse &&
          this.state.serverResponse.map(r => (
            <li>{r.videoId}</li>
          ))
        }
        {!this.state.serverResponse && <p>Check this out!</p>}
      </Layout>
    );

  }
}

export default App;
