import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import Footer from '../general/Footer';
import Header from '../general/Header';
import BlogFaq from './landingPage/BlogFaq';
import Contact from './landingPage/Contact';
import DrivesUs from './landingPage/DrivesUs';
import HeroSection from './landingPage/HeroSection';
import OurCompany from './landingPage/OurCompany';
import Services from './landingPage/Services';
import Team from './landingPage/Team';

function HomePage() {
    const [scroll, setScroll] = useState("")
    const scrollRef = useRef()
    const serviceRef = useRef()
    const teamRef = useRef()
    const contactRef = useRef()
    const handleScroll = ()=>{
        if (scroll === "about"){
            scrollRef.current?.scrollIntoView({
                behavior: 'smooth',
                block : 'start'
            })
        }
        else if(scroll === "service"){
            serviceRef.current?.scrollIntoView({
                behavior: 'smooth',
                block : 'start'
            })
        }
        else if(scroll === "team"){
            teamRef.current?.scrollIntoView({
                behavior: 'smooth',
                block : 'start'
            })
        }
        else if(scroll === "contact"){
            contactRef.current?.scrollIntoView({
                behavior: 'smooth',
                block : 'start'
            })
        }
    }
    useEffect(()=>{
        handleScroll()
    },[scroll])
    return (
        <MainContainer>
            <Header setScroll={setScroll}/>
            <HeroSection />
            <OurCompany scrollRef={scrollRef} />
            <DrivesUs />
            <Services serviceRef={serviceRef} />
            <Team teamRef={teamRef}/>
            <BlogFaq />
            <Contact contactRef={contactRef} />
            <Footer />
        </MainContainer>
    )
}

export default HomePage;

const MainContainer = styled.div `
    /* height: 100vh; */
`;