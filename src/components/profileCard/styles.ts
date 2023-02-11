import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    width: 814px;
    height: 212px;
    margin: auto auto;
    padding: 32px 10px 32px 40px;
    background-color: ${props => props.theme['base-post']};
    margin-top: -5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
   
`;

export const ProfileImage = styled.img`
    height: 148px;
    width: 148px;
    border-radius: 0.5rem;
`;

export const ProfileDescription = styled.article`
    h2{
        font-size: 24px;
        font-weight: 700;
    }
    p{
        font-size: 16px;
        opacity: 0.5;
    }
`;

export const ProfileFooter = styled.footer`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: stretch;

    img{
        height: 16.88px;
        width: 16.88px;
    }

    p{
        display: flex;
        align-items: center;
        color: ${props => props.theme['base-subtitle']};
        opacity: 1;
    }
`;