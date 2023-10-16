import React, { useEffect, useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useLocation } from 'react-router-dom'

import Banner from '../components/Banner/Banner'
import OurAdvantages from '../components/OurAdvantages/OurAdvantages'
import Gallery from '../components/Gallery/Gallery'
import Menu from '../components/Menu/Menu'
import { Loader } from '../common/Loader/Loader'


const Home = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const elementId = location.hash.substr(1)
        const element = document.getElementById(elementId)

        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [location])

    return (
        <>
            {isLoading
                ? <Loader/>
                : <ParallaxProvider>
                    <Banner id='banner'/>
                    <OurAdvantages id='ourAdvantages'/>
                    <Gallery/>
                    <Menu id='menu'/>
                </ParallaxProvider>
            }
        </>
    )
}

export default Home
