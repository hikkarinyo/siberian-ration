import React from "react"
import classNames from "classnames";
import {ParallaxBanner} from "react-scroll-parallax";
import {BannerLayer} from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import {Button} from "../../common/Button/Button";


const cx = classNames.bind(require('./styles.scss'))

interface OurAdvantagesProps {
    id?: string;
}

const OurAdvantages = () => {

    const background: BannerLayer = {
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    }

    const headline: BannerLayer = {
        translateY: [0, 30],
        scale: [1, 1.05, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <section className={cx("оurAdvantagesWrapper")}>
                <h1 className={cx("оurAdvantagesTitle")}>Наши преимущества</h1>
            </section>
        )
    }

    return (
        <ParallaxBanner
            layers={[background, headline]}
            className={cx("оurAdvantages")}
        />
    )
}

export default OurAdvantages
