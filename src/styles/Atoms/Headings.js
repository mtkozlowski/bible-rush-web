import styled, { css } from "styled-components";

const PageHeader = styled.h1`
  font-size: 120px;
  margin: 0 0 80px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.blue};
`;

const CommonStyle = css`
  margin: 0;
`;

export const H1 = styled.h1`
    ${CommonStyle}
    font-weight: ${({ theme }) => theme.typography.boldFontWeight};
    font-size: 3rem;
    ${(props) =>
      props.superBig &&
      css`
        font-size: 9vw;
        letter-spacing: -0.3vw;
        line-height: 7.2vw;
        text-indent: -0.15em;
        padding-left: 0.15em;

        span {
          font-size: 2em;
          display: inline-block;
          margin-left: 0.08em;
        }
      `}
`;

export const H2 = styled.h2`
    ${CommonStyle}
    font-weight: ${({ theme }) => theme.typography.boldFontWeight};
    font-size: 1.875rem;
`;

export const H3 = styled.h3`
    ${CommonStyle}
    font-weight: ${({ theme }) => theme.typography.boldFontWeight};
    font-size: 1.5rem;
`;

export const H4 = styled.h4`
    ${CommonStyle}
    font-weight: ${({ theme }) => theme.typography.boldFontWeight};
    font-size: 1.172rem;
`;

export const H5 = styled.h5`
    ${CommonStyle}
    font-weight: ${({ theme }) => theme.typography.boldFontWeight};
    font-size: 1rem;
`;

export const H6 = styled.h6`
    ${CommonStyle}
    font-weight: ${({ theme }) => theme.boldFontWeight};
    font-size: 0.8rem;
`;

export default PageHeader;
