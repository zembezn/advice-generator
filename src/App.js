import React from 'react';
import { Card, Heading, Text, Divider, Button } from './Components/Card.styled';
import GlobalStyle from './Components/GlobalStyle';
import PatternDivider from './images/pattern-divider-desktop.svg';
import ButtonIcon from './images/icon-dice.svg';
import { useEffect, useState } from 'react';

const App = () => {

  const [advice, setAdvice] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    setAdvice(data);
    console.log(data);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);


  return (
    <>
      <GlobalStyle />
      <Card>
        <Heading>ADVICE #</Heading>
        <Text>&ldquo;&rdquo;</Text>
        <Divider><img src={PatternDivider} alt="Divider" /></Divider>
        <Button onClick={fetchAdvice}>
          <img src={ButtonIcon} alt="Icon" />
        </Button>
      </Card>
    </>
  );
};

export default App;
