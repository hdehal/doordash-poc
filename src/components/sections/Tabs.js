import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import reach from '@images/art/dd-helps-reach.png';
import presence from '@images/art/dd-helps-presence.png';
import margins from '@images/art/dd-helps-margins.png';

export default () => (
    <Tabs>
        <TabList>
            <Tab>Reach new customers</Tab>
            <Tab>Improve your margins</Tab>
            <Tab>Increase brand presence</Tab>
        </TabList>

        <TabPanel>
            <div className="tabContent">
                <div className="tabImage"><img src={reach} alt="Reach new clients" /></div>
                <div className="tabText">
                    <p>By fulfilling deliveries as far as 25 miles from your location, DoorDash enables your business to reach a customer base well beyond the traditional dine-in experience.</p>
                    <a href="https://get.doordash.com/reach-new-customers?hsLang=en" class="btn btn-primary">Learn more</a>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className="tabContent">
                <div className="tabImage"><img src={margins} alt="Improve your margins" /></div>
                <div className="tabText">
                    <p>Make up to 60% net profit on incremental delivery orders. With none of the overhead costs of a traditional dine-in experience, you can focus on cooking—we'll do the rest.</p>
                    <a href="https://get.doordash.com/reach-new-customers?hsLang=en" class="btn btn-primary">How margins work</a>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <div className="tabContent">
                <div className="tabImage"><img src={presence} alt="Increase brand presence" /></div>
                <div className="tabText">
                    <p>We help you get your brand out there in front of new customers. Your restaurant is showcased in the app with just the right visual flair to catch attention.</p>
                    <a href="https://get.doordash.com/reach-new-customers?hsLang=en" class="btn btn-primary">Build your brand</a>
                </div>
            </div>
        </TabPanel>
    </Tabs>
);