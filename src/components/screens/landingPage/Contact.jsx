import React from 'react';
import styled from 'styled-components';

function Contact({contactRef}) {
    return (
        <MainContainer ref={contactRef}>
            <WrapperContainer>
                <TopContainer>
                    <Title>FIND US</Title>
                    <TopContent>
                        <small>6C, Cyber Hills <br />Seaport Airport Road, Kakkanad</small>
                    </TopContent>
                </TopContainer>
                <MiddleContainer>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.169492372821!2d76.34608731473288!3d10.002854575729748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c96cee1c871%3A0x425d300c6788beb8!2s6%2C%20Seaport%20-%20Airport%20Rd%2C%20Chittethukara%2C%20Kochi%2C%20Kerala%20682037!5e0!3m2!1sen!2sin!4v1672255393062!5m2!1sen!2sin" 
                        width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </MiddleContainer>
                <BottomContainer>
                    <Title>CONNECT WITH US</Title>
                    <TopContent>
                        <TelephoneContainer>
                            <a href="tel:+918848067178">+91 884 806 7178,</a>
                            <a href="tel:+914843561391">+91 484 356 1391</a>
                        </TelephoneContainer>
                        <a href="mailto:hello@idendt.com">hello@idendt.com</a><br />
                        <a href="www.idendt.com">www.idendt.com</a>

                    </TopContent>
                </BottomContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default Contact;

const MainContainer = styled.div `
    padding: 30px 0;
`;
const WrapperContainer = styled.div `
    /* width: 80%;
    margin: 0 auto; */
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
const TopContainer = styled.div `
    width: 80%;
    margin: 0 auto 30px;
`;
const MiddleContainer = styled.div `
    height: 450px;
    width: 100%;
    /* position: relative; */
    iframe{
        /* position: absolute; */
        height: 100%;
        width: 100%;
        /* left: 0;
        right: 0;
        top: 0;
        bottom: 0; */
    }
`;
const BottomContainer = styled.div `
    width: 80%;
    margin: 30px auto;
`;
const TopContent = styled.div`
    small{
        font-size: 20px;
        @media all and (max-width: 980px) {
            font-size: 16px;
        }
    }
    a{
        color: #fff;
        font-size: 20px;
        margin-bottom: 10px;
        display: inline-block;
        @media all and (max-width: 980px) {
            font-size: 18px;
        }
    }
`;
const TelephoneContainer = styled.div`
`;