import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 100%;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 100%;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 100%;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 100%;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  overflow: hidden;

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;
