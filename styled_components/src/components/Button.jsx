import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyleButton = styled.button.attrs((props) => ({
  outlined: "true", //_ свойства по умолчанию
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }
  align-self: ${(props) => props.align || "stretch"};

  ${(
    props //_ шаблон первой кнопки
  ) =>
    props.primary &&
    css`
      color: ${(props) => props.color || "white"};
      background: ${(props) => props.background || "white"};
    `};

  ${(
    props //_ шаблон второй кнопки
  ) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || "white"};
      border: 1px solid ${(props) => props.color || "white"};
      background: transparent;
    `}
`;

const LargeButton = styled(StyleButton)`
  //_ расширение существующих компонентов
  font-size: 32px;
`;

const Button = (props) => {
  return <StyleButton {...props} />;
};
export default Button;
