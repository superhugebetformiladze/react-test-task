import styled from "styled-components";
import Flex from "@components-common/Styled/Flex";
import Text from "@components-common/Styled/Text";
import { Link } from "react-router-dom";
import { theme } from "@/index";
import Button from "@components-common/Button/Button";
import useWindowSize from "@hooks/useWindowSize";

interface StylesProps {
  height?: string;
  width?: string;
}

const StyledFooter = styled.div<StylesProps>`
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.color || props.theme.colors.footer};
  padding: 3rem 3rem 6rem 3rem;
  border-radius: 24px 24px 0 0;
`;

const Footer = (props: any) => {
  const { width } = useWindowSize();
  const isTablet = width && width <= 768;
  const isMobile = width && width <= 480;
  return (
    <StyledFooter {...props}>
      {isTablet ? (
        <Flex
          flexDirection="column"
          alignItems="center"
          padding={isMobile ? "1rem" : "2rem"}
          backgroundColor={theme.colors.white}
          borderRadius="24px"
        >
          <Link to="/">
            <Text
              fontWeight="600"
              cursor="pointer"
              fontSize="2rem"
              margin="1rem 0"
            >
              Logo
            </Text>
          </Link>
          <Button
            border="1px solid"
            borderColor={theme.colors.button}
            borderRadius="24px"
            padding={isMobile ? "0.5rem" : "1rem"}
            colorHover={theme.colors.white}
            margin="1rem 0"
          >
            Связаться с нами
          </Button>
        </Flex>
      ) : (
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          padding="2rem"
          backgroundColor={theme.colors.white}
          borderRadius="24px"
        >
          <Link to="/">
            <Text fontWeight="600" cursor="pointer" fontSize="2rem">
              Logo
            </Text>
          </Link>
          <Button
            border="1px solid"
            borderColor={theme.colors.button}
            borderRadius="24px"
            padding="0.5rem 1rem"
            colorHover={theme.colors.white}
          >
            Связаться с нами
          </Button>
        </Flex>
      )}
    </StyledFooter>
  );
};

export default Footer;
