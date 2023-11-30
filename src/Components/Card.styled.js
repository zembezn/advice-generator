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

@media (max-width: 768px) {
    width: 350px;
}
`;

export const Heading = styled.p` 
position: absolute;
top: 370px;
align-content: center;
color: hsl(150, 100%, 66%);
font-size: 50%;
letter-spacing: 4.5px;

@media (max-width: 768px) {
    position: absolute;
    top: 330px;
}
`;

export const TextContainer = styled.div`
width: 100%;
height: 53%;
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

export const Button = styled.button`
position: absolute;
bottom: 295px;
width: 65px;
height: 65px;
align-items: center;
justify-content: center;
border-radius: 100%;
border: none;
background-color: hsl(150, 100%, 66%);
cursor: pointer;

&:hover {
    filter: drop-shadow(0 0 0.75rem hsl(150, 100%, 66%));
}

@media (max-width: 768px) {
    position: absolute;
    bottom: 255px;
}
`;