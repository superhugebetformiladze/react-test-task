import React from "react";
import ProductList from "../components/CardProduct/ProductList";
import Flex from "../components/common/Styled/Flex";
import Text from "../components/common/Styled/Text";
import styled from "styled-components";


export function CatalogPage() {
  return (
    <>
      <Flex flexDirection="column" width="100%" alignItems="center">
        <Text fontSize="2rem" fontWeight="600" width="100%" padding="4rem 0 0 4rem">Каталог</Text>
        <ProductList showAll/>
      </Flex>
    </>
  )
}