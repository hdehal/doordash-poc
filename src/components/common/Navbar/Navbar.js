import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import DoorDashLogo from '@images/logos/doordash.svg';
import DoorDashLogoScrolling from '@images/logos/doordash_scrolling.svg';
import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = ['Products', 'Resources', 'Contact Us', 'Log In'];

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.scrollFunc = this.scrollFunc.bind(this);

    this.state = {
      mobileMenuOpen: false,
      showScrollTop: false
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunc)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFunc)
  }

  scrollFunc(e) {
    var y = window.scrollY;
    if (y >= 100) {
      this.setState({
        showScrollTop: true
      });

    } else {
      this.setState({
        showScrollTop: false
      });
    }
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile} className="navList">
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem className={this.state.showScrollTop === true ? 'navItemRed' : 'navItemWhite'} key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}

        {this.state.showScrollTop === true ? 
        <NavItem className="getStarted">Get Started!</NavItem> : 
        null}
          
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props} className={this.state.showScrollTop === true ? 'scrolling' : 'notscrolling'}>
        <StyledContainer>
          <Brand><img src={this.state.showScrollTop === true ? DoorDashLogoScrolling : DoorDashLogo} alt="Logo" /></Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
