import styled, { css } from "styled-components";

export const RegularSectionStyle = css`
  width: ${({ theme }) => theme.regularSection};
  max-width: 100%;
  margin: 0 auto;
`;

const RegularSection = styled.section`
  ${RegularSectionStyle}
`;

export default RegularSection;
