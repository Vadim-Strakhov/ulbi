import styled from "styled-components";
import Title from "./components/Title.jsx";
import Flex from "./components/Flex.jsx";
import Console from "./components/Console.jsx";
import Button from "./components/Button.jsx";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title
        // color="green"
        >
          Console cmd 2024.
        </Title>
      </Flex>
      <Flex direction="column" margin="10px">
        <Console />
        {/* <Button primary background={"green"} color={"red"} align="flex-end">
          Отправить
        </Button> */}
        <Button color="green" align="flex-end">
          Отправить
        </Button>
      </Flex>
    </AppWrapper>
  );
};
export default App;
