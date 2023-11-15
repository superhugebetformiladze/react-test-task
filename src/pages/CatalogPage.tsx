import React from "react";
import ProductList from "@components/CardProduct/ProductList";
import Flex from "@components-common/Styled/Flex";
import Text from "@components-common/Styled/Text";
import useWindowSize from "@hooks/useWindowSize";

export function CatalogPage() {
  const { width } = useWindowSize();
  const isTablet = width && width <= 768;
  return (
    <>
      {isTablet ? (
        <Flex flexDirection="column" width="100%" alignItems="center">
          <Text
            fontSize="2rem"
            fontWeight="600"
            width="100%"
            textAlign="center"
            padding="4rem 0 0 0"
          >
            Каталог
          </Text>
          <ProductList showAll />
        </Flex>
      ) : (
        <Flex flexDirection="column" width="100%" alignItems="center">
          <Text
            fontSize="2rem"
            fontWeight="600"
            width="100%"
            padding="4rem 0 0 4rem"
          >
            Каталог
          </Text>
          <ProductList showAll />
        </Flex>
      )}
    </>
  );
}
