import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import ccf from '@images/logos/logo-ccf.png';
import chipotle from '@images/logos/logo-chipotle.png';
import freshii from '@images/logos/logo-freshii.png';
import hopdoddy from '@images/logos/logo-hopdoddy.png';
import kabuki from '@images/logos/logo-kabuki.png';
import loscucos from '@images/logos/logo-los-cucos.png';
import playabowls from '@images/logos/logo-playabowls.png';
import portillos from '@images/logos/logo-portillos.png';
import rasa from '@images/logos/logo-rasa.png';
import roamburgers from '@images/logos/logo-roam-burgers.png';
import torchys from '@images/logos/logo-torchys.png';

// Detect mobile
const isMobile = typeof window !== `undefined` ? window.innerWidth < 480 : null;

// Window resize logic for carousel from https://github.com/express-labs/pure-react-carousel/issues/126

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.setTotalSlides = this.setTotalSlides.bind(this);

        this.state = {
            totalSlides: this.computeTotalSlides(),
        };
    }

    componentWillUnmount() {
        window.clearTimeout(this.throttle);
        window.removeEventListener('resize', this.handleWindowResize, false);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize, false);
    }

    computeTotalSlides() {
        if (typeof window !== 'undefined') {
            const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

            if (width > 1280) {
                return 6;
            } else if (width <= 1280) {
                return 2;
            }

            /*             if (width < 768) {
                            return 2;
                        } else if (width <= 1024) {
                            return 3;
                        } else if (width <= 1280) {
                            return 4;
                        } else if (width >= 1281) {
                            return 6;
                        } */
        }
    }

    setTotalSlides() {
        const totalSlides = this.computeTotalSlides();
        console.log(this.computeTotalSlides() + "X");
        if (this.state.totalSlides !== totalSlides) this.setState({ totalSlides });
    }

    handleWindowResize() {
        window.clearTimeout(this.throttle);
        this.throttle = window.setTimeout(this.setTotalSlides, 400);
    }

    render() {
        return (
            <div>
                <h2>Made for all businesses—big and small</h2>
                <h3>300,000+ businesses on DoorDash and growing</h3>
                <CarouselProvider
                    naturalSlideWidth={10}
                    naturalSlideHeight={10}
                    visibleSlides={this.state.totalSlides !== 2 ? this.state.totalSlides : 2}
                    totalSlides={11}
                    isPlaying
                >
                    <Slider>
                        <Slide index={0}><img src={kabuki} alt="Kabuki" /></Slide>
                        <Slide index={1}><img src={roamburgers} alt="Roam Artisan Burgers" /></Slide>
                        <Slide index={2}><img src={torchys} alt="Torchy's Tacos" /></Slide>
                        <Slide index={3}><img src={portillos} alt="Portillo's" /></Slide>
                        <Slide index={4}><img src={hopdoddy} alt="HopDoddy Burger Bar" /></Slide>
                        <Slide index={5}><img src={loscucos} alt="Los Cucos" /></Slide>
                        <Slide index={6}><img src={playabowls} alt="Playabowls" /></Slide>
                        <Slide index={7}><img src={rasa} alt="Rasa" /></Slide>
                        <Slide index={8}><img src={ccf} alt="Cheesecake Factory" /></Slide>
                        <Slide index={9}><img src={chipotle} alt="Chipotle" /></Slide>
                        <Slide index={10}><img src={freshii} alt="Freshii" /></Slide>
                    </Slider>

                </CarouselProvider>
            </div>
        );
    }
}