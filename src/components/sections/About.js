import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Section, Container } from '@components/global';
import BackgroundImage from 'gatsby-background-image'
import profitPie from '@images/art/profit-pie.svg';
import reachGraph from '@images/art/reach-graph.svg';
import stopwatch from '@images/art/stopwatch.svg';

// Detect mobile
const isMobile = typeof window !== `undefined` ? window.innerWidth < 480 : null ;
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

        art_new_customers: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "new-customers" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        
        art_options: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "options" }
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

          {/* FEATURES 1 of 3 */}
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
              <div id="features" className="features">
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

          {/* FEATURES 2 of 3 */}
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={data.art_new_customers.childImageSharp.fluid}
            style={{
              backgroundSize: 'contain',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#f7f7f7'
            }}
          >
            <Grid className="reverseFlex">
              <div></div>
              <div className="features">
                <h2>Reach new customers</h2>
                <div class="stat">
                  <img src={reachGraph} alt="Up to 60% profit" />
                  <div>
                    92% of orders come from entirely new customers
                  </div>
                </div>
                <p>
                  We feature your menu on our app and website so that customers can discover your restaurant and order food. All of this will be done without you needing to lift a finger!                </p>
              </div>
            </Grid>
          </BackgroundImage>

          {/* FEATURES 3 of 3 */}
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={data.art_options.childImageSharp.fluid}
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
                <h2>We give options, you call the shots</h2>
                <div class="stat">
                  <img src={stopwatch} alt="Up to 60% profit" />
                  <div>
                    <h3>37 min</h3>
                    Average delivery time
                  </div>
                </div>
                <p>
                  We use our strong Dasher network to fulfill your delivery orders within 37 minutes on average. So your food is delivered to your customer exactly how you prepared it.
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
