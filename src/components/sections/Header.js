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
                <h2>Feature your business on DoorDash and reach new customers</h2>
              </div>
              <div className="signupForm">
                <h3>Start your 30 day free trial!</h3>
                <form>
                  <input type="text" id="restName" aria-placeholder="Restaurant Name" placeholder="Restaurant Name" />
                  <label for="restName">Restaurant Name</label>
                  <input type="text" id="restAddress" aria-placeholder="Restaurant Address" placeholder="Restaurant Address" />
                  <label for="restAddress">Restaurant Address</label>
                  <input type="email" id="restEmail" aria-placeholder="Email" placeholder="Email" />
                  <label for="restEmail">Email</label>
                  <input type="tel" id="restTel" aria-placeholder="Mobile Phone" placeholder="Mobile Phone e.g. 415-888-8888" />
                  <label for="restTel">Mobile Phone</label>
                  <input type="button" className="btn" value="Get Started!" />
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
