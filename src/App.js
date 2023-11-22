import { Card, Heading, Text, Divider, Button } from "./Components/Card.styled";
import GlobalStyle from "./Components/GlobalStyle";
import PatternDivider from "./images/pattern-divider-desktop.svg";
import ButtonIcon from "./images/icon-dice.svg"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Card>
        <Heading>ADVICE #<span id="advice-id"></span></Heading>
        <Text>"<span id="advice-text"></span>"</Text>
        <Divider><img src={PatternDivider} alt="Divider" /></Divider>
        <Button>
          <img src={ButtonIcon} alt="Icon" />
        </Button>
      </Card>
    </>
  );
}

export default App;
