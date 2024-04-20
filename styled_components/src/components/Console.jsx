import styled from "styled-components";
import Flex from "./Flex";
import { useState } from "react";
import Line from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${(props) =>
    props.color ||
    props.theme.colors
      .primary}; //_ получение цвета из глобальной темы (в main.jsx)
  &:focus {
    outline: none;
  }
  //_ получение медиа значений из глобальной темы (в main.jsx)
  @media ${(props) => props.theme.media.phone} {
    border: 1px solid red;
  }
  @media ${(props) => props.theme.media.tablet} {
    border: 1px solid green;
  }
`;

const Console = ({ color, ...props }) => {
  const [lines, setLines] = useState(["C/users/userID>"]);

  const onKeyPress = (e) => {
    if (e.charCode == 13) {
      setLines([...lines, "C/users/userID>"]);
    }
  };
  return (
    // <StyledConsole {...props} />
    <Flex>
      <Flex direction={"column"} margin={"0 10px"}>
        {lines.map((line, id) => (
          <Line color={color} key={id}>
            {line}
          </Line>
        ))}
      </Flex>

      <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
    </Flex>
  );
};
export default Console;
