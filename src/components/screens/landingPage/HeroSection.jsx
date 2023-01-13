import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../../assets/images/landingPage/Cover.png';
import Pattern from '../../../assets/images/landingPage/Pattern.png';

function HeroSection() {
  return (
    <MainContainer>
        <WrapperContainer>
            <HeroImageContainer>
                <img src={HeroImage} alt="Hero image" />
            </HeroImageContainer>
            <ContentContainer>
                <Title>
                    BRANDING & BEYOND
                </Title>
                <IdentifyButton>
                    Get Identified
                </IdentifyButton>
            </ContentContainer>
        </WrapperContainer>
        <BottomImageContainer>
            <img src={Pattern} alt="Image" />
        </BottomImageContainer>
    </MainContainer>
  )
}

export default HeroSection;

const MainContainer = styled.div`
    /* height: 100vh; */
    /* height: calc(100vh - 100px); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 80px;
    @media all and (max-width: 640px) {
        padding-bottom: 30px;
    }
    @media all and (max-width: 480px) {
        padding-bottom: 20px;
    }
`;
const WrapperContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;
const HeroImageContainer = styled.div`
    width: 45%;
    margin: 0 auto;
    img{
        width: 100%;
        display: block;
    }
    @media all and (max-width: 640px) {
        width: 70%;
    }
    @media all and (max-width: 480px) {
        width: 80%;
    }
`;
const ContentContainer = styled.div`
    margin: -100px 0 0;
`;
const BottomImageContainer = styled.div`
    position: relative;
    height: 350px;
    width: 100%;
    img {
        width: 100%;
        display: block;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
    @media all and (max-width: 980px) {
        height: 200px;
    }
    @media all and (max-width: 768px) {
        height: 175px;
    }
    @media all and (max-width: 640px) {
        height: 150px;
    }
    @media all and (max-width: 480px) {
        height: 100px;
    }
`;
const Title = styled.h3`
    font-size: 38px;
    margin-bottom: 15px;
    @media all and (max-width: 980px) {
        font-size: 32px;
    }
    @media all and (max-width: 640px) {
        font-size: 26px;
    }
`;
const SubTitle = styled.h5`
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 25px;
    @media all and (max-width: 980px) {
        font-size: 18px;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;
const IdentifyButton = styled.div`
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 10px;
    width: fit-content;
    padding: 10px 20px;
    font-size: 25px;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;
    :hover{
        background-color: #fff;
        color: #000;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;
    }
    @media all and (max-width: 980px) {
        font-size: 18px;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;