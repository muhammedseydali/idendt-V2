import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery1 from '../../../assets/images/landingPage/Digital-Strategy.png';
import Gallery2 from '../../../assets/images/landingPage/Branding.png';
import Gallery3 from '../../../assets/images/landingPage/Marketing.png';
import Gallery4 from '../../../assets/images/landingPage/Web-development.png';
import Gallery5 from '../../../assets/images/landingPage/Design-and-Media.png';
import Gallery6 from '../../../assets/images/landingPage/SEO.png';
import Group from '../../../assets/images/landingPage/OurServices.png';

function Services({serviceRef}) {
    const [ toggle, setToggle ] = useState();
    const serviceData = [
        {
            "id" : 1,
            "image" : Gallery1,
            "title" : "Digital Strategy",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id" : 2,
            "image" : Gallery2,
            "title" : "Branding",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id" : 3,
            "image" : Gallery3,
            "title" : "User Experience/User Interface",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id" : 4,
            "image" : Gallery4,
            "title" : "Development",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id" : 5,
            "image" : Gallery5,
            "title" : "Web Design",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id" : 6,
            "image" : Gallery6,
            "title" : "SEO",
            "subtitle" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
    ];
    return (
        <MainContainer>
            <WrapperContainer  ref={serviceRef}>
                <Title>OUR SERVICES</Title>
                <ImageGallery>
                    {serviceData.map((item) => (
                        <ImageContainer key={item.id} onMouseEnter={() => setToggle(item.id)} onMouseLeave={() => setToggle()}>
                            <img src={item.image} alt="Image" />
                            <BottomContent className={toggle === item.id ? "hoverContent" : ""}>
                                <ContentHeading>{item.title}</ContentHeading>
                                <ContentDescription className={toggle === item.id ? "onHoverContent" : ""}>
                                    {item.subtitle}
                                </ContentDescription>
                            </BottomContent>
                        </ImageContainer>
                    ))}
                </ImageGallery>
                <TagLine>" <TagContent>QUALITY OVER QUANTITY <br />AND RESULTS OVER EXCUSES</TagContent> "</TagLine>
                <ImageContainer>
                    <img src={Group} alt="Image" />
                </ImageContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default Services;

const MainContainer = styled.div `
    /* height: calc(100vh - 220px); */
    padding-bottom: 80px;
    @media all and (max-width: 640px) {
        padding-bottom: 30px;
    }
    @media all and (max-width: 480px) {
        padding-bottom: 20px;
    }
`;
const WrapperContainer = styled.div `
    width: 80%;
    margin: 0 auto;
`;
const Title = styled.h3 `
    font-size: 32px;
    margin-bottom: 20px;
    @media all and (max-width: 980px) {
        font-size: 28px;
    }
`;
const ImageGallery = styled.div `
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-bottom: 30px;
    cursor: pointer;
    @media all and (max-width: 768px) {
        grid-template-columns: auto auto;
    }
    @media all and (max-width: 480px) {
        grid-template-columns: auto;
    }
`;
const ImageContainer = styled.div `
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        display: block;
    }
`;
const TagLine = styled.small`
    font-size: 28px;
    font-style: italic;
    display: block;
    text-align: center;
    margin-bottom: 25px;
    font-family: Georgia;
    @media all and (max-width: 480px) {
        font-size: 20px;
    }
    `;
const TagContent = styled.p`
    display: inline;
    font-style: italic;
`;

const BottomContent = styled.div `
    /* background-image: linear-gradient(to bottom, #5c5c5c 30%, rgba(255,255,255,0));
    box-shadow: 0px -2px 2px rgba(34,34,34,0.6); */
    /* -webkit-mask-image : linear-gradient(90deg, transparent, #000 42.3rem); */
    background-image: -webkit-gradient(
    linear, left top, left bottom, from(rgba(50,50,50,0.8)),
    to(rgba(80,80,80,0.2)), color-stop(.5,#333333)
    );
    padding: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 75%;
    transition: all 0.3s ease-in-out;
    overflow: scroll;
    &.hoverContent {
        top: 0;
        transition: all 0.3s ease-in-out;
    }

    @media all and (min-width: 1311px) {
        top: 85%;
    }
    @media all and (max-width: 980px) {
        top: 70%;
    }
    @media all and (max-width: 768px) {
        top: 77%;
    }
    @media all and (max-width: 480px) {
        top: 85%;
    }
    @media all and (max-width: 360px) {
        top: 76%;
    }
`;
const ContentHeading = styled.h5`
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
    @media all and (max-width: 980px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;
const ContentDescription = styled.p`
    font-size: 16px;
    display: none;
    &.onHoverContent {
        display: inline-block;
    }
    @media all and (max-width: 980px) {
        font-size: 12px;
    }

`;