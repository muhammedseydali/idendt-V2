import React from 'react';
import styled from 'styled-components';
import Gallery1 from '../../../assets/images/team/Shabeeb.png';
import Gallery2 from '../../../assets/images/team/Afeef.png';
import Gallery3 from '../../../assets/images/team/Amal.png';
import Gallery4 from '../../../assets/images/team/Jose.png';
import Gallery5 from '../../../assets/images/team/Sachin.png';
import Gallery6 from '../../../assets/images/team/Dilju.png';
import LinkedInLogo from '../../../assets/images/linkedin.webp';

function Team({teamRef}) {
    const teamData = [
        {
            "id" : 1,
            "image" : Gallery1,
            "title" : "Shabeeb P A",
            "linkedin" : "https://www.linkedin.com/in/shabeeb-pulikoodan-19706a83/"
        },
        {
            "id" : 2,
            "image" : Gallery2,
            "title" : "Afeef Abbas",
            "linkedin" : "https://www.linkedin.com/in/afeef-p-abbas-ba7372227/"
        },
        {
            "id" : 3,
            "image" : Gallery3,
            "title" : "Amal Sajan",
            "linkedin" : "https://www.linkedin.com/in/amal-sajan-47660b1b3/"
        },
        {
            "id" : 4,
            "image" : Gallery4,
            "title" : "Jose Chacko",
            "linkedin" : "https://www.linkedin.com/in/jose-chacko-799971113/"
        },
        {
            "id" : 5,
            "image" : Gallery5,
            "title" : "Sachin Ajayan",
            "linkedin" : "https://www.linkedin.com/in/sachin-ajayan-a7367025a/"
        },
        {
            "id" : 6,
            "image" : Gallery6,
            "title" : "Dilju Sukumaran",
            "linkedin" : "https://www.linkedin.com/in/dilju-sukumaran-4a636520b/"
        },
    ];
    return (
        <MainContainer ref={teamRef}>
            <WrapperContainer>
                <Title>OUR TEAM</Title>
                <ImageGallery>
                    {teamData.map((item) => (
                        <ImageContainer>
                            <img src={item.image} alt="Image" />
                            <BottomContent>
                                <ContentHeading>{item.title}</ContentHeading>
                                <ContentDescription href={item.linkedin} target="_blank" >
                                    {/* <FontAwesomeIcon icon={faLinkedin}/>    */}
                                    <img src={LinkedInLogo} alt="Linkedin Logo" />
                                </ContentDescription>
                            </BottomContent>
                        </ImageContainer>
                    ))}
                </ImageGallery>
            </WrapperContainer>
        </MainContainer>
    )
}

export default Team;

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
    @media all and (max-width: 480px) {
        font-size: 24px;
    }
`;
const ImageGallery = styled.div `
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-bottom: 30px;
    @media all and (max-width: 768px) {
        grid-template-columns: auto auto;
    }
    @media all and (max-width: 480px) {
        grid-template-columns: auto;
    }
`;
const ImageContainer = styled.div `
    position: relative;
    img {
        width: 100%;
        display: block;
    }
`;
const BottomContent = styled.div `
    padding: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
`;
const ContentHeading = styled.h5`
    font-size: 22px;
    font-weight: 600;
    margin-right: 10px;
    font-family: 'Inter-Bold';
    @media all and (max-width: 980px) {
        font-size: 18px;
    }
`;
const ContentDescription = styled.a`
    font-size: 20px;
    width: 20px;
    border-radius: 50%;
    overflow: hidden;
    img{
        display: block;
        width: 100%;
    }
`;
const DescriptionBox = styled.p`
    font-size: 20px;
`;