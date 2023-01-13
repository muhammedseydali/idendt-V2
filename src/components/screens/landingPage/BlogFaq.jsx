import React, { useState } from 'react';
import styled from 'styled-components';
import Blog from '../../../assets/images/blog/blog.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

function BlogFaq() {
    const faqData = [
        {
            id : 1,
            title : "DO I REALLY NEED A WEBSITE?",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto illo odit recusandae corporis, veritatis quas delectus amet libero reiciendis fugiat commodi nulla vitae. Asperiores repudiandae debitis ipsa molestias sequi?"
        },
        {
            id : 2,
            title : "WHAT IS SEARCH ENGINE OPTIMIZATION?",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto illo odit recusandae corporis, veritatis quas delectus amet libero reiciendis fugiat commodi nulla vitae. Asperiores repudiandae debitis ipsa molestias sequi?"
        },
        {
            id : 3,
            title : "WHAT MAKES FOR A GOOD WEB DESIGN?",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto illo odit recusandae corporis, veritatis quas delectus amet libero reiciendis fugiat commodi nulla vitae. Asperiores repudiandae debitis ipsa molestias sequi?"
        },
    ]

    const [ itemId, setItemId ] = useState();
    const [ itemExpand, setItemExpand ] = useState();
    return (
        <MainContainer>
            <WrapperContainer>
                {/* <BlogContainer>
                    <Title>OUR LATEST BLOGS</Title>
                    <ImageGallery>
                        <ImageContainer>
                            <img src={Blog} alt="Image" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={Blog} alt="Image" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={Blog} alt="Image" />
                        </ImageContainer>
                    </ImageGallery>
                </BlogContainer> */}
                <FaqContainer>
                    <Title>FAQ</Title>
                    <SubTitle>CLARIFYING YOUR CONCERNS AND DOUBTS.</SubTitle>
                    <FaqListContainer>
                        {faqData.map((item) => (
                            <Faq>
                                <ContentHeadContainer>
                                    <ContentHeading>{item.title}</ContentHeading>
                                    {itemId === item.id && itemExpand ? 
                                        <FontAwesomeIcon 
                                            icon={faCaretUp} 
                                            onClick={() => {
                                                setItemId();
                                                setItemExpand(false);
                                        }} />
                                        :
                                        <FontAwesomeIcon 
                                            icon={faCaretDown} 
                                            onClick={() => {
                                                setItemId(item.id);
                                                setItemExpand(true);
                                        }} />
                                    }
                                </ContentHeadContainer>
                                {itemId === item.id && itemExpand ? 
                                    <ContentDescription>{item.description}</ContentDescription>
                                    :
                                    null
                                }
                            </Faq>
                        ))}
                    </FaqListContainer>
                </FaqContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default BlogFaq;

const MainContainer = styled.div `
    background-color: #202121;
    padding: 30px 0;
    padding-bottom: 80px;
    @media all and (max-width: 768px) {
        padding-bottom: 50px;
    }
    @media all and (max-width: 640px) {
        padding-bottom: 30px;
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
const SubTitle = styled.h5 `
    font-size: 20px;
    margin-bottom: 20px;
    @media all and (max-width: 980px) {
        font-size: 18px;
    }
`;
const ImageGallery = styled.div `
    display: grid;
    padding: 10px;
    margin-bottom: 30px;
    grid-template-columns: auto auto auto;
    @media all and (max-width: 768px) {
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
const FaqListContainer = styled.div`

`;
const BlogContainer = styled.div `
    
`;
const FaqContainer = styled.div `
    
`;
const Faq = styled.div `
    padding: 18px;
    margin-bottom: 30px;
    background: #191C21;
    box-shadow: 0px 28.6524px 63.0354px rgb(126 126 126 / 15%);
    border-radius: 11.461px;
    @media all and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;
const ContentHeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        cursor: pointer;
    }
`;
const ContentHeading = styled.h5`
    font-size: 22px;
    font-weight: 600;
    @media all and (max-width: 980px) {
        font-size: 18px;
    }
`;
const ContentDescription = styled.p`
    font-size: 18px;
    transition: all 1s ease;
    margin-top: 10px;
    @media all and (max-width: 980px) {
        font-size: 16px;
    }
`;