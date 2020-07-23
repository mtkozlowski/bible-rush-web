import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 12px;

  display: inline-block;
  padding: 0.4em 0.6em;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightgrey};
    border-color: ${({ theme }) => theme.colors.black};

    /* box-shadow: 1px 1px 3px #ccc; */
  }

  ${({ theme }) => theme.media.phone} {
    margin-top: 0 !important;
  }
`;

export const LargeButton = styled(Button)`
  font-size: 1.2rem;
  padding: 0.6em 1em 0.55em;
`;
