import React from "react";
import CardProduct from "../components/CardProduct";
import { products } from "../data/products";
import Flex from "../components/common/Styled/Flex";

export function ProductsPage() {
  return (
    <>
      <Flex flexDirection="row" padding="2rem">
        <CardProduct product={products[0]} width="16rem" />
      </Flex>
    </>

  )
}