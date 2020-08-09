import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Container } from '@components/global';
import BackgroundImage from 'gatsby-background-image'

const Header = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "hero-bg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={data.art_build.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <HeaderWrapper>
          <Container>
            <Grid>
              <Text>
                <h1>Increase your takeout sales</h1>
                <h3>Feature your business on DoorDash and reach new customers</h3>
              </Text>
            </Grid>
          </Container>

        </HeaderWrapper>
      </BackgroundImage>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: transparent;
  padding-top: 96px;
  height: 100vh;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

export default Header;
