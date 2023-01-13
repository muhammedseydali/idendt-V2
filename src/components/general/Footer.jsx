import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fb from "../../assets/images/facebook.png";
import Insta from "../../assets/images/instagram.png";
import Youtube from "../../assets/images/youtube.png";


function Footer() {
    return (
        <MainContainer>
            <WrapperContainer>
                <LeftBox>
                    <TermsTitle> 
                        *terms and conditions
                    </TermsTitle>
                </LeftBox>
                <RightBox>
                    <a href='https://www.facebook.com/iden.dt'>
                        <img src={Fb} alt="Fb Logo" />
                    </a>
                    <a href='https://www.instagram.com/iden.dt/'>
                        <img src={Insta} alt="Insta Logo" />
                    </a>
                    <a href='https://www.youtube.com/shorts/c4ECuLBcPdI'>
                        <img src={Youtube} alt="Youtube Logo" />
                    </a>
                </RightBox>
            </WrapperContainer>
        </MainContainer>
    )
}

export default Footer;

const MainContainer = styled.div `
    background-color: #fff;
    color: #000;
`;
const WrapperContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`;
const LeftBox = styled.div `
    width: 30%;
`;
const TermsTitle = styled.h5 `
    width: 200px;
`;
const RightBox = styled.div `
    width: 60%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;

    a{
        background-color: #000;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-left: 10px;

        img{
            display: block;
            width: 100%;
        }
    }
`;