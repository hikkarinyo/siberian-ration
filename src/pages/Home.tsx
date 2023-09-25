import React from "react";
import Banner from "../components/Banner/Banner";
import {ParallaxProvider} from "react-scroll-parallax";
import classNames from "classnames";
import OurAdvantages from "../components/OurAdvantages/OurAdvantages";

const cx = classNames.bind(require('./styles.scss'))
const Home = () => {
    return (
        <>
            <ParallaxProvider>
                <Banner/>
                <OurAdvantages/>
            </ParallaxProvider>
        </>
    )
}

export default Home