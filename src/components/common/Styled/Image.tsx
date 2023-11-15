import styled from "styled-components";

interface StylesProps {
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  objectFit?: string;
}

const StyledImage = styled.img<StylesProps>`
  border-radius: ${(props) => props.borderRadius || "0"};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  object-fit: ${(props) => props.objectFit || "initial"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const Image = (props: any) => {
  return <StyledImage {...props} />;
};

export default Image;
