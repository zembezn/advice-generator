import { Card, Heading, Text, Divider, Button } from "./Components/Card.styled";
import GlobalStyle from "./Components/GlobalStyle";
import PatternDivider from "./images/pattern-divider-desktop.svg";
import ButtonIcon from "./images/icon-dice.svg";
import { useEffect, useState } from "react";

const App = () => {

  const [advice, setAdvice] = useState('')

  let isMounted = true
  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    if (isMounted) {
      setAdvice(data)
      console.log(data)
    }
    useEffect(() => {
      fetchAdvice();
    }, []);

    return (
      <>
        <GlobalStyle />
        <Card>
          <Heading>ADVICE #{advice.slip.id}</Heading>
          <Text>"{advice.slip.advice}"</Text>
          <Divider><img src={PatternDivider} alt="Divider" /></Divider>
          <Button onClick={fetchAdvice}>
            <img src={ButtonIcon} alt="Icon" />
          </Button>
        </Card>
      </>
    );
  }
}

export default App;
