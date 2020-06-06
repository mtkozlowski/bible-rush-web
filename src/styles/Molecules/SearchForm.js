import React from 'react';
import styled from 'styled-components';
import { Button } from '../Atoms/Buttons';

const Label = styled.label`
  display: block;
`;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverResponse: "",
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onFormValueChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label>
          Szukaj komentarzy do Słowa Bożego za pomocą sigli i słów kluczowych:
          <input type="text" onChange={this.handleChange} />
        </Label>
        <Button type="submit">Search!</Button>
      </form>
    );
  }
}

export default SearchForm;