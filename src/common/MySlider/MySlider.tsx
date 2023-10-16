import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classNames from 'classnames'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { SliderProps } from '../types'


const cx = classNames.bind(require('./styles.scss'))

interface ArrowsProps {
    className: string
    onClick?: () => void
}

const SampleNextArrow = (props: ArrowsProps) => {
    const { onClick, className } = props

    return (
        <button className={cx('nextButton', className)} onClick={onClick}>
            <SvgIcon src='/icons/right-arrow.svg' width='30'/>
        </button>
    )
}

const SamplePrevArrow = (props: ArrowsProps) => {
    const { onClick, className } = props
    return (
        <button
            className={cx('prevButton', className)}
            onClick={onClick}
        >
            <SvgIcon src='/icons/left-arrow.svg' width='30'/>
        </button>
    )
}

export const MySlider = ({ images }: SliderProps) => {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className='nextButton'/>,
        prevArrow: <SamplePrevArrow className='prevButton'/>,
    }

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <img key={index} src={`${image}`} alt='menu'/>
            ))}
        </Slider>
    )
}