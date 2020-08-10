import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Section, Container } from '@components/global';
import BackgroundImage from 'gatsby-background-image'
import Tabs from '@sections/Tabs';
import Carousel from '@sections/Carousel';

import profitPie from '@images/art/profit-pie.svg';
import reachGraph from '@images/art/reach-graph.svg';
import stopwatch from '@images/art/stopwatch.svg';
import arrowDown from '@images/art/arrow-down.svg';
import restaurant from '@images/art/restaurant.png';
import menu from '@images/art/menu.png';
import scooter from '@images/art/scooter.png';

// Detect mobile
const isMobile = typeof window !== `undefined` ? window.innerWidth < 480 : null;
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
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        art_more_business: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "more-business" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        art_new_customers: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "new-customers" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        
        art_options: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "options" }
        ) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
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
                  <AnchorLink href='#features' offset='50'>Learn more</AnchorLink>
                  <img src={arrowDown} className="arrow" alt="Up to 60% profit" />
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
                    37 min<br />Average delivery time
                  </div>
                </div>
                <p>
                  We use our strong Dasher network to fulfill your delivery orders within 37 minutes on average. So your food is delivered to your customer exactly how you prepared it.
                </p>
              </div>
            </Grid>
          </BackgroundImage>

          {/* STEPS TO GET STARTED */}
          <Grid>
            <div class="ready-to-join section section-green green">
              <h2>3 simple steps to get started:</h2>
              <div class="container process">
                <div class="step col-md">
                  <div class="number">1</div>
                  <div class="icon"><img src={restaurant} alt="1" /></div>
                  <div class="label">Tell us about your restaurant</div>
                </div>
                <div class="step col-md">
                  <div class="number">2</div>
                  <div class="icon"><img src={menu} alt="2" /></div>
                  <div class="label">Upload your menu</div>
                </div>
                <div class="step col-md">
                  <div class="number">3</div>
                  <div class="icon"><img src={scooter} alt="3" /></div>
                  <div class="label">You cook, we deliver</div>
                </div>
              </div>
            </div>
          </Grid>

          {/* TABS */}
          <Grid className="grey">
            <div className="tabContainer">
              <h2>DoorDash helps businesses like yours...</h2>
              <Tabs />
            </div>
          </Grid>

          {/* LOGO CAROUSEL */}
          <Grid>
            <div className="carouselContainer">
              <Carousel />
            </div>
          </Grid>

        </Container>
      </Section>
    )}
  />
);

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
