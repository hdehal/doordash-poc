import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Section, Container } from '@components/global';
import BackgroundImage from 'gatsby-background-image'

const About = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ready-to-join" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>

          {/* READY TO JOIN */}
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={data.art_fast.childImageSharp.fluid}
            style={{
              backgroundSize: 'contain',
              backgroundPosition: 'left',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#ecfbfb'
            }}
          >
            <Grid>
              <div class="ready-to-join section section-green">
                <div class="container">
                  <h2>Ready to join the 300,000+ restaurants already on DoorDash?</h2>
                  <a href="#feature1" class="smooth-scroll">
                    <p>
                      <AnchorLink href='#features'>Learn more</AnchorLink>
                    </p>
                  </a>
                </div>
              </div>
            </Grid>
          </BackgroundImage>

          {/* FEATURES */}
          <Grid inverse id="features">
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Nothing new to learn here</h2>
              <p>
                Enjoy the power of the latest web technologies – React.js ,
                Webpack , modern JavaScript and CSS and more — all set up and
                waiting for you to start building.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Grow and build your ideas</h2>
              <p>
                Waste no more time on tooling and performance. Focus on the the
                site you want to build and nothing more.
                <br />
                <br />
                Gatsby is fast in every way that matters.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: flex;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
    props.inverse &&
    `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
