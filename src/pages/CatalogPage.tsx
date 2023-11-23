import React from 'react'
import ProductsList from '@components/CardProduct/ProductsList'
import Flex from '@components-common/Styled/Flex'
import Text from '@components-common/Styled/Text'
import useWindowSize from '@hooks/useWindowSize'

export function CatalogPage() {
  const { width } = useWindowSize()
  const isTablet = width && width <= 768
  return (
    <>
      {isTablet ? (
        <Flex flexdirection="column" width="100%" alignitems="center">
          <Text
            fontSize="2rem"
            fontWeight="600"
            width="100%"
            textalign="center"
            padding="4rem 0 0 0"
          >
            Каталог
          </Text>
          <ProductsList showAll />
        </Flex>
      ) : (
        <Flex flexdirection="column" width="100%" alignitems="center">
          <Text fontSize="2rem" fontWeight="600" width="100%" padding="4rem 0 0 4rem">
            Каталог
          </Text>
          <ProductsList showAll />
        </Flex>
      )}
    </>
  )
}
