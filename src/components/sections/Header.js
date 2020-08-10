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
            fluid(quality: 90, maxWidth: 1440) {
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
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center top +12%',
        }}
      >
        <HeaderWrapper className="header">
          <Container>
            <Grid>
              <div className="signupCTA">
                <h1>Increase your takeout sales</h1>
                <h3>Feature your business on DoorDash and reach new customers</h3>
              </div>
              <div className="signupForm">
                <h3>Start your 30 day free trial!</h3>
                <form>
                  <input type="text" placeholder="Restaurant Name" />
                  <input type="text" placeholder="Restaurant Address" />
                  <input type="text" placeholder="Email" />
                  <input type="tel" placeholder="Mobile Phone e.g. 415-888-8888" />
                  <input type="button" value="Get Started!" />
                </form>
              </div>
            </Grid>
          </Container>

        </HeaderWrapper>
      </BackgroundImage>
    )}
  />
);

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  background-color: transparent;
  padding-top: 5em;
  height: 75vh;
  min-height: 500px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
`;

export default Header;
