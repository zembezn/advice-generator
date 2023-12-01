import React from 'react';
import { Card, Heading, HeadingContainer, Text, TextContainer, Divider, Button, ButtonContainer, Attribute } from './Components/Card.styled';
import GlobalStyle from './Components/GlobalStyle';
import ButtonIcon from './images/icon-dice.svg';
import { useEffect, useState } from 'react';
import PatternDivider from './images/pattern-divider-desktop.svg';
import MobilePatternDivider from './images/pattern-divider-mobile.svg';

const App = () => {

  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    setAdvice(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);


  return (
    <>
      <GlobalStyle />

      <Card>
        <HeadingContainer>
          <Heading>ADVICE #{advice.id}</Heading>
        </HeadingContainer>
        <TextContainer>
          <Text>&ldquo;{advice.advice}&rdquo;</Text>
        </TextContainer>
        <Divider>
          <img className='desktop' src={PatternDivider} alt="Divider" />
          <img className='mobile' src={MobilePatternDivider} alt="Mobile Pattern Divider" />
        </Divider>
      </Card>
      <ButtonContainer>
        <Button className='buttonContainer' onClick={fetchAdvice} media={MobilePatternDivider}>
          <img src={ButtonIcon} alt="Button Icon" />
        </Button>
      </ButtonContainer>

      <Attribute>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target=""> Frontend Mentor </a>.
        Coded by <a href="https://github.com/zembezn?tab=repositories">Kanya Zembe </a>.
      </Attribute>
    </>
  );
};

export default App;
