import React from 'react';

import facebook from '@images/logos/facebook.svg';
import twitter from '@images/logos/instagram.svg';
import instagram from '@images/logos/twitter.svg';
import dasherIcon from '@images/logos/dasher_icon.svg';

export default () => (

  <div className="copyrightContainer">
    <div className="custom-copyright">
      <ul>
        <li>
          <img src={dasherIcon} /><a href="https://www.doordash.com/" class="custom-footer-logo">
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
          <a href="http://facebook.com/doordash" target="_blank" class="custom-footer-logo">
            <img src={facebook} />
          </a>
        </li>
        <li>
          <a href="http://twitter.com/doordash" target="_blank" class="custom-footer-logo">
            <img src={twitter} />
          </a>
        </li>
        <li>
          <a href="http://instagram.com/doordash" target="_blank" class="custom-footer-logo">
            <img src={instagram} />
          </a>
        </li>
      </ul>
    </div>
  </div>

);