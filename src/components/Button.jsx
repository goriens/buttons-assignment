import styled from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "primary":
      return "#fff";
    case "dashed":
      return "#fff";
    case "text":
      return "#fff";
    case "link":
      return "#03a9f3";
    default:
      return "#fff";
  }
};
const handleBackgroundType = (background) => {
  switch (background) {
    case "primary":
      return "#03a9f3";
    case "dashed":
      return "#e21b5a";
    case "text":
      return "#c78933";
    case "link":
      return "#fff";
    default:
      return "gray";
  }
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  margin: 5px 15px;
  padding: 7px 15px;
  border-radius: 8px;
  font-size: 15px;
  background: ${({ background }) => handleBackgroundType(background)};
  color: ${({ color }) => handleColorType(color)};
`;

export { Button };
