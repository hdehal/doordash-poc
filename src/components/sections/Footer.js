import React from 'react';

import facebook from '@images/logos/facebook.svg';
import twitter from '@images/logos/instagram.svg';
import instagram from '@images/logos/twitter.svg';
import dasherIcon from '@images/logos/dasher_icon.svg';
import appleStore from '@images/logos/apple_store.svg';
import googleStore from '@images/logos/google_store.svg';

export default () => (

  <div className="copyrightContainer">

    <div>
      <h1>Get to Know Us</h1>
      <ul className="siteMap">
        <li><a href="https://www.doordash.com/about/">About Us</a></li>
        <li><a href="https://www.doordash.com/careers/">Careers</a></li>
        <li><a href="http://blog.doordash.com/">Blog</a></li>
        <li><a href="https://www.linkedin.com/company/doordash">LinkedIn</a></li>
        <li><a href="https://www.glassdoor.com/Reviews/DoorDash-Reviews-E813073.htm">Glassdoor</a></li>
        <li><a href="https://www.doordash.com/accessibility/">Accessibility</a></li>
      </ul></div>

    <div>
      <h1>Let Us Help You</h1>
      <ul className="siteMap">
        <li><a href="https://www.doordash.com/consumer/edit_profile/">Account Details</a></li>
        <li><a href="https://www.doordash.com/orders/">Order History</a></li>
        <li><a href="https://support.doordash.com/">Support</a></li>
        <li><a href="https://support.doordash.com/#/general">FAQs</a></li>
      </ul>
    </div>

    <div>
      <h1>Doing Business</h1>
      <ul className="siteMap">
        <li><a href="https://www.doordash.com/dasher/signup/">Become a Dasher</a></li>
        <li><a href="https://www.doordash.com/merchant/apply/">Be a Partner Restaurant</a></li>
        <li><a href="https://www.doordash.com/drive/discover/">Get Dashers for Deliveries</a></li>
      </ul>
    </div>

    <div>
      <ul className="getApp">
        <li>
          <a href="https://itunes.apple.com/us/app/doordash-food-delivery/id719972451?mt=8" target="_blank" rel="noreferrer" class="custom-footer-logo">
            <img src={appleStore} alt="Available on the App Store" />
          </a>
        </li>
        <li>
          <a href="https://play.google.com/store/apps/details?id=com.dd.doordash" target="_blank" rel="noreferrer" class="custom-footer-logo">
            <img src={googleStore} alt="Android App on Google Play" />
          </a>
        </li>
      </ul>
    </div>

    <div className="custom-copyright">
      <ul>
        <li>
          <a href="https://www.doordash.com/" class="custom-footer-logo">
            <img src={dasherIcon} alt="DoorDash" />
          </a>
        </li>
        <li>
          <a href="https://www.doordash.com/terms/">Terms of Service</a>
        </li>
        <li>
          <a href="https://www.doordash.com/privacy/">Privacy</a>
        </li>
        <li>
          <a href="https://www.doordash.com/food-delivery/">Delivery Locations</a>
        </li>
        <li>
          &copy; 2019 DoorDash
      </li>
      </ul>
    </div>

    <div className="custom-copyright social">
      <ul>
        <li>
          <a href="http://facebook.com/doordash" target="_blank" rel="noreferrer" class="custom-footer-logo">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="http://twitter.com/doordash" target="_blank" rel="noreferrer" class="custom-footer-logo">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="http://instagram.com/doordash" target="_blank" rel="noreferrer" class="custom-footer-logo">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
      </ul>
    </div>
  </div >

);