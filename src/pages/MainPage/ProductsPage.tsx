import React from "react";
import ProductList from "../../components/CardProduct/ProductList";
import Flex from "../../components/common/Styled/Flex";
import Text from "../../components/common/Styled/Text";
import styled from "styled-components";
import Button from "../../components/common/Button/Button";
import { theme } from "../../index"
import { Link } from "react-router-dom";

interface StylesProps {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  padding?: string;
  margin?: string;
}

const StyledCatalog = styled.div<StylesProps>`
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  background-color: #000;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 70vh;
  border-radius: 24px;
`

const Catalog = (props: any) => {
  return (
    <StyledCatalog {...props}>
      <Flex height="100%" width="100%" alignItems="flex-end" justifyContent="space-between">
        <Text fontSize="2.5rem" fontWeight="600" color={theme.colors.white}>Продажа ингредиентов и вендингового оборудования</Text>
        <Link to="/catalog">
          <Button border="1px solid" borderColor={theme.colors.button} borderRadius="24px" padding="1rem 2rem" >Перейти в каталог</Button>
        </Link>
      </Flex>
    </StyledCatalog>
  )
}

export function ProductsPage() {
  return (
    <>
      <Flex flexDirection="column" width="100%" alignItems="center">
        <Catalog margin="2rem 0" padding="4rem" />
        <Text fontSize="2rem" fontWeight="600" width="100%" padding="4rem 0 0 4rem">Наши товары</Text>
        <ProductList />
        <Link to="/catalog">
        <Button border="1px solid" borderColor={theme.colors.button} borderRadius="24px" padding="1rem 2rem"
          backgroundColor={theme.colors.button} color={theme.colors.white} backgroundColorHover={theme.colors.buttonHover}>
          Посмотреть все
        </Button>
        </Link>
      </Flex>
    </>
  )
}