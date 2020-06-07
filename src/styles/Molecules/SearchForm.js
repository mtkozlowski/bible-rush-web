import React from 'react';
import styled from 'styled-components';
import { LargeButton } from '../Atoms/Buttons';
import { H3 } from '../Atoms/Headings';

const Label = styled.label`
  display: inline-block;
  margin-right: 2rem;
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  height: 2.5rem;
  display: inline-block;
  width: 480px;
  border-radius: 1rem;
  padding: 0 0.6rem;

  :focus {
    outline: none;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  }
`;

const StyledForm = styled.form`
  margin-bottom: 6rem;
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
      <StyledForm onSubmit={this.handleSubmit}>
        <H3>Szukaj komentarzy do Słowa Bożego za pomocą sigli:</H3>

        <Label>
          Sigle: <StyledInput type="text" onChange={this.handleChange} />
        </Label>
        <LargeButton type="submit">Search!</LargeButton>
      </StyledForm>
    );
  }
}

export default SearchForm;