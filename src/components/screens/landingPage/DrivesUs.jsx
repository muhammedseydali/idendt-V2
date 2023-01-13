import React from 'react';
import styled from 'styled-components';
import Dm2 from '../../../assets/images/landingPage/WhatDrivesUs.png';

function DrivesUs() {
    return (
        <MainContainer>
            <WrapperContainer>
                <Title>WHAT DRIVES US</Title>
                <InnerContainer>
                    <LeftBox>
                        <ImageContainer>
                            <img src={Dm2} alt="Image" />
                        </ImageContainer>
                        <TagLine>" <TagContent>SIMPLIFY MARKETING.<br /> GROW AS A BRAND.<br /> LEAD THE MARKET.</TagContent> "</TagLine>
                    </LeftBox>
                    <RightBox>
                        <DescriptionBox>
                            Becoming a brand and being just a business is different. We believe in brands as
                            business drivers; powerful tools to help organisations unlock their potential. Great
                            brands can connect and inspire all who work for, know about, and engage with them.
                            At idenDT’s, it's the passion and love to create brands that are both brilliant and
                            beautiful that drives us ahead. We want brands to be beautiful, as in visually
                            impactful, and brilliant, as in having a compelling brand purpose, story, and global
                            acceptance. Our process of creation is multi-faceted. We believe in working together
                            in collaboration with our clients; we believe in asking many questions and openly
                            listening to feedback. We see the process of creation as a journey and the outcome
                            as purposeful, often surprising, and ultimately impactful.
                        </DescriptionBox>
                    </RightBox>
                </InnerContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default DrivesUs;

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
const InnerContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 768px) {
        flex-direction: column;
    }
`;
const LeftBox = styled.div`
    width: 48%;
    @media all and (min-width: 1280px) {
        width: 40%;
    }
    @media all and (min-width: 1500px) {
        width: 30%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const RightBox = styled.div`
    width: 50%;
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const Title = styled.h3 `
    font-size: 32px;
    margin-bottom: 20px;
    
    @media all and (max-width: 980px) {
        font-size: 28px;
    }
    @media all and (max-width: 480px) {
        font-size: 24px;
    }
`;
const ImageContainer = styled.div `
    width: 65%;
    margin: 0 auto 20px;
    
    img {
        width: 100%;
        display: block;
    }

    @media all and (max-width: 980px) {
        width: 70%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
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
    font-size: 26px;
    display: inline;
`;
const DescriptionBox = styled.p`
    font-size: 20px;
    @media all and (max-width: 980px) {
        font-size: 18px;
    }
    @media all and (max-width: 480px) {
        font-size: 13px;
    }
`;