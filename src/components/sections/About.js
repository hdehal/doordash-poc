import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Section, Container } from '@components/global';
import BackgroundImage from 'gatsby-background-image'
import profitPie from '@images/art/profit-pie.svg';

// Render map default zoom based on mobile breakpoint
const isMobile = window.innerWidth < 480;
const isMobileBackground = isMobile ? 'cover' : 'contain';

const About = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        art_ready_to_join: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ready-to-join" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        art_more_business: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "more-business" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
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
            fluid={data.art_ready_to_join.childImageSharp.fluid}
            style={{
              backgroundSize: 'contain',
              backgroundPosition: 'left',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#ecfbfb'
            }}
          >
            <Grid>
              <div class="ready-to-join section section-green">
                <h2>Ready to join the 300,000+ restaurants already on DoorDash?</h2>
                <p>
                  <AnchorLink href='#features' offset='70'>Learn more</AnchorLink>
                </p>
              </div>
            </Grid>
          </BackgroundImage>

          {/* FEATURES */}
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={data.art_more_business.childImageSharp.fluid}
            style={{
              backgroundSize: 'contain',
              backgroundPosition: 'left',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#FFFFFF'
            }}
          >
            <Grid>
              <div></div>

              <div className="features">
                <h2>More business, less effort</h2>
                <div class="stat">
                  <img src={profitPie} alt="Up to 60% profit" />
                  <div>
                    <div class="number"><small>up to</small>60%</div>
                    Profit on incremental orders
                  </div>
                </div>
                <p>
                  Today, more and more people want the convenience of delivery. Our app reaches 80% of consumers in America. Your restaurant will be seen by millennials, parents, and even companies who need catering - all without the costs of a dine-in experience.
                </p>
              </div>
            </Grid>
          </BackgroundImage>

        </Container>
      </Section>
    )}
  />
);


const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  background-color: transparent;
  padding-top: 5em;
  height: 100vh;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding - top: 128px;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  justify-item: center;
`;

export default About;
