import styled from 'styled-components';

export const Card = styled.div`
width: 530px;
height: 330px;
max-width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column; 
background-color: hsl(217, 19%, 24%);
border-radius: 15px;
position: relative;

@media (max-width: 768px) {
    width: 350px;
}
`;
export const HeadingContainer = styled.div`
width: 100%;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
margin-bottom: 18px;

@media (max-width: 768px) {
    width: 100%;
    height: 20px;
}
`;

export const Heading = styled.p` 
align-content: center;
color: hsl(150, 100%, 66%);
font-size: 50%;
letter-spacing: 4.5px;
`;

export const TextContainer = styled.div`
width: 100%;
height: 165px;
display: flex;
justify-content: center;
align-items: center;
`;

export const Text = styled.p`
align-items: center;
text-align: center;
margin: 0px 35px;
padding-bottom: 20px;

@media (max-width: 768px) {
    font-size: 75%;
}
`;

export const Divider = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
margin-bottom: 30px;

img.desktop {
display: block;  
}

img.mobile {
    display: none;
}

@media (max-width: 768px) {
    width: 100%;
    height: auto;

    img.mobile {
        display: flex;
    }

    img.desktop {
        display: none;
    }
}
`;
export const ButtonContainer = styled.div`
width: 65px;
height: 65px;
margin-top: -35px;
margin-left: 230px;
position: relative;
z-index: 2;

@media (max-width: 768px) {
    width: 65px;
    height: 65px;
    margin-left: 140px;
}
`;

export const Button = styled.button`
width: 65px;
height: 65px;
border-radius: 100%;
border: none;
background-color: hsl(150, 100%, 66%);
cursor: pointer;
justify-content: center;
align-items: center;
display: flex;

&:hover {
    filter: drop-shadow(0 0 0.75rem hsl(150, 100%, 66%));
}
`;

export const Attribute = styled.div`
display: flex;
font-size: 12px;
justify-content: center;
color: hsl(0, 0%, 100%);
margin-top: 150px;

@media (max-width: 768px) {
    margin-top: 180px;
}
`;