import React from "react"
import classNames from "classnames";
import {ParallaxBanner} from "react-scroll-parallax";
import {BannerLayer} from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import {Button} from "../../common/Button/Button";


const cx = classNames.bind(require('./styles.scss'))

interface BannerProps {
    id?: string;
}

const Banner = () => {
    const background: BannerLayer = {
        image: "https://static.tildacdn.com/tild3432-3235-4561-a365-643535353230/DSC00327.jpg",
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
            <div className={cx("bannerWrapper")}>
                <h1 className={cx("bannerTitle")}>Выездное обслуживание<br/>мероприятия</h1>
                <ul className={cx("bannerList")}>
                    <li className={cx("bannerList-item")}>банкет</li>
                    <li className={cx("bannerList-item")}>кофе-брейк</li>
                    <li className={cx("bannerList-item")}>фуршет</li>
                </ul>
                <Button>Забронировать</Button>
            </div>
        )
    }

    return (
        <ParallaxBanner
            layers={[background, headline]}
            className={cx("banner")}
        />
    )
}

export default Banner
