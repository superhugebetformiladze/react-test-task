import React from 'react'
import ProductList from '@components/CardProduct/ProductList'
import Flex from '@components-common/Styled/Flex'
import Text from '@components-common/Styled/Text'
import styled from 'styled-components'
import Button from '@components-common/Button/Button'
import { theme } from '@/index'
import { Link } from 'react-router-dom'
import useWindowSize from '@hooks/useWindowSize'

interface StylesProps {
  flexdirection?: string
  alignitems?: string
  justifycontent?: string
  padding?: string
  margin?: string
  height?: string
}

const StyledCatalogBanner = styled.div<StylesProps>`
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  background-color: #000;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${(props) => props.height || '70vh'};
  border-radius: 24px;
`

const CatalogBanner = (props: any) => {
  const { width } = useWindowSize()
  const isTablet = width && width <= 768
  return (
    <StyledCatalogBanner {...props}>
      {isTablet ? (
        <Flex
          flexdirection="column"
          height="100%"
          width="100%"
          alignitems="center"
          justifycontent="flex-end"
          flexwrap="nowrap"
        >
          <Text fontSize="1.5rem" margin="2rem 0" fontWeight="600" color={theme.colors.white}>
            Продажа ингредиентов и вендингового оборудования
          </Text>
          <Link to="/catalog">
            <Button
              border="1px solid"
              bordercolor={theme.colors.button}
              borderradius="24px"
              padding="1rem 2rem"
            >
              Перейти в каталог
            </Button>
          </Link>
        </Flex>
      ) : (
        <Flex
          height="100%"
          width="100%"
          alignitems="flex-end"
          justifycontent="space-between"
          flexwrap="nowrap"
        >
          <Text fontSize="2.5rem" fontWeight="600" color={theme.colors.white} margin="0 2rem 0 0">
            Продажа ингредиентов и вендингового оборудования
          </Text>
          <Link to="/catalog">
            <Button
              border="1px solid"
              bordercolor={theme.colors.button}
              borderradius="24px"
              padding="1rem 2rem"
            >
              Перейти в каталог
            </Button>
          </Link>
        </Flex>
      )}
    </StyledCatalogBanner>
  )
}

export function ProductsPage() {
  const { width } = useWindowSize()
  const isTablet = width && width <= 768
  return (
    <>
      <Flex flexdirection="column" width="100%" alignitems="center">
        {isTablet ? (
          <CatalogBanner margin="2rem 0" padding="8rem 2rem 2rem 2rem" height="auto" />
        ) : (
          <CatalogBanner margin="2rem 0" padding="4rem" />
        )}
        {isTablet ? (
          <Text
            fontSize="2rem"
            fontWeight="600"
            width="100%"
            padding="4rem 0 0 0"
            textAlign="center"
          >
            Наши товары
          </Text>
        ) : (
          <Text fontSize="2rem" fontWeight="600" width="100%" padding="4rem 0 0 4rem">
            Наши товары
          </Text>
        )}
        <ProductList />
        <Link to="/catalog">
          <Button
            border="1px solid"
            bordercolor={theme.colors.button}
            borderradius="24px"
            padding="1rem 2rem"
            backgroundcolor={theme.colors.button}
            color={theme.colors.white}
            backgroundcolorhover={theme.colors.buttonHover}
          >
            Посмотреть все
          </Button>
        </Link>
      </Flex>
    </>
  )
}
