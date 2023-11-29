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
`;
export const Heading = styled.p` 
align-content: center;
color: hsl(150, 100%, 66%);
font-size: 60%;
letter-spacing: 4.5px;
margin-top: 8%;
`;
export const Text = styled.p`
align-items: center;
`;
export const Divider = styled.div`
align-content: center;
margin-bottom: 12%;
`;
export const Button = styled.button`
position: absolute;
bottom: 295px;
width: 65px;
height: 65px;
border-radius: 100%;
border: none;
background-color: hsl(150, 100%, 66%);
cursor: pointer;

&:hover {
    filter: drop-shadow(0 0 0.75rem hsl(150, 100%, 66%));
}
`;