import React from 'react';
import styled from 'styled-components';
import OurCompanyImage from '../../../assets/images/landingPage/OurIdendtOne.png';

function OurCompany({scrollRef}) {
    return (
        <MainContainer ref={scrollRef}>
            <WrapperContainer>
                <Title>OUR IdenDT</Title>
                <InnerContainer>
                    <LeftBoxContainer>
                        <ContentContainer>
                            At idenDT, we help businesses grow and develop
                            by combining insightful strategic thinking with
                            imaginative design to create impact and desire.
                            Our magic recipe blends innovative strategy,
                            creative design, and cutting-edge technology to
                            make beautiful, brilliant brand experiences,
                            expanding the business’s future vision. 
                        </ContentContainer>
                        <ContentContainer>
                            Our family consists of a group of individuals who
                            are passionate about collaborating, sharing ideas,
                            and working as a team with the primary goal of
                            advancing accountability and quality. We know
                            that helping helps, and that is why our procedures
                            are productive and economical. To make the
                            process run more smoothly, we adjust costs to
                            your needs without sacrificing the quality of our
                            services.
                        </ContentContainer>
                    </LeftBoxContainer>
                    <RightBoxContainer>
                        <ImageContainer>
                            <CompanyImage src={OurCompanyImage} alt="Company Image" />
                        </ImageContainer>
                        <TagLine>" <TagContent>YOUR BUSINESS IS <br />OUR BUSINESS.</TagContent> "</TagLine>
                    </RightBoxContainer>
                </InnerContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default OurCompany;

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
const WrapperContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;
const InnerContainer = styled.div `
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const LeftBoxContainer = styled.div `
    width: 50%;
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const Title = styled.h3 `
    margin-bottom: 20px;
    font-size: 32px;
    @media all and (max-width: 980px) {
        font-size: 28px;
    }
    @media all and (max-width: 480px) {
        font-size: 24px;
    }
`;
const ContentContainer = styled.p `
    margin-bottom: 20px;
    font-size: 20px;
    @media all and (max-width: 980px) {
        font-size: 18px;
    }
    @media all and (max-width: 480px) {
        font-size: 13px;
    }
`;
const RightBoxContainer = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;
const ImageContainer = styled.div`
    width: 50%;
    @media all and (min-width: 1280px) {
        width: 40%;
    }
    @media all and (min-width: 1500px) {
        width: 30%;
    }
`;
const CompanyImage = styled.img`
    display: block;
    width: 100%;
`;
const TagLine = styled.small`
    font-size: 28px;
    font-style: italic;
    display: block;
    text-align: center;
    margin-bottom: 25px;
    font-family: 'Georgia';
    @media all and (max-width: 480px) {
        font-size: 20px;
    }
`;
const TagContent = styled.p`
    font-size: 28px;
    display: inline;
`;