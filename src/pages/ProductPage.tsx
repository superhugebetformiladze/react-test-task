import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useWindowSize from '@hooks/useWindowSize'
import Flex from '@components-common/Styled/Flex'
import Image from '@components-common/Styled/Image'
import Text from '@components-common/Styled/Text'
import { useFetchProductById } from '@hooks/useFetchProductById'
import { theme } from '@/index'
import Counter from '@components-common/Counter/Counter'
import Button from '@components-common/Button/Button'
import { openModal } from '@redux/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/reducers/rootReducer'
import { useCartCookie } from '@cookies/cartCookies'
import LoadingSpinner from '@components/common/Loading/LoadingSpinner'

export function ProductPage() {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const { width } = useWindowSize()
  const isTablet = width && width <= 768
  const isMobile = width && width <= 480

  const globalQuantity = useSelector((state: RootState) => state.counter.globalQuantity)

  const { addToCart } = useCartCookie()

  const { product, isLoading } = useFetchProductById({ id: id })

  const memoizedProduct = useMemo(() => product, [product])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!memoizedProduct) {
    return <p>No product found</p>
  }

  const handleAddToCart = () => {
    try {
      addToCart(memoizedProduct, globalQuantity)
      dispatch(openModal())
    } catch (error) {
      console.error('Error adding cartCookie:', error)
    }
  }

  return (
    <>
      {isTablet ? (
        <Flex
          flexdirection="column"
          alignitems="center"
          justifycontent="center"
          flexwrap="nowrap"
          margin="2rem"
        >
          <Image
            height="60vh"
            width="70vw"
            src={memoizedProduct.image}
            alt="product"
            padding="2rem"
            backgroundcolor={theme.colors.white}
            borderradius="24px"
            margin="0 0 2rem 0"
            objectfit="scale-down"
          />
          <Flex flexdirection="column" flexgrow="1" padding="1rem 0 0 0">
            <Text fontWeight="600" fontSize="1.5rem" margin="0 0 1.3rem 0">
              {memoizedProduct.title}
            </Text>
            <Text fontWeight="600" fontSize="2rem" margin="0 0 1.3rem 0">
              {memoizedProduct.price}$
            </Text>
            <Flex
              margin="0 0 2rem 0"
              flexdirection={isMobile ? 'column' : 'row'}
              width="fit-content"
            >
              <Counter
                productId={memoizedProduct.id}
                margin={isMobile ? '0 0 0.5rem 0' : '0 1rem 0 0'}
              />
              <Button
                border="1px solid"
                bordercolor={theme.colors.button}
                borderradius="24px"
                padding={isMobile ? '0.5rem 1.8rem' : '0 2rem'}
                backgroundcolor={theme.colors.button}
                color={theme.colors.white}
                backgroundcolorhover={theme.colors.buttonHover}
                onClick={handleAddToCart}
              >
                В корзину
              </Button>
            </Flex>
            <Text>{memoizedProduct.description}</Text>
          </Flex>
        </Flex>
      ) : (
        <Flex
          flexdirection="row"
          alignitems="flex-start"
          justifycontent="flex-start"
          flexwrap="nowrap"
          margin="2rem"
        >
          <Image
            height="30rem"
            width="22rem"
            src={memoizedProduct.image}
            alt="product"
            padding="2rem"
            backgroundcolor={theme.colors.white}
            borderradius="24px"
            margin="0 2rem 0 0"
            objectfit="scale-down"
          />
          <Flex flexdirection="column" flexgrow="1" padding="1rem 0 0 0">
            <Text fontWeight="600" fontSize="1.5rem" margin="0 0 1.5rem 0">
              {memoizedProduct.title}
            </Text>
            <Text fontWeight="600" fontSize="2rem" margin="0 0 1.5rem 0">
              {memoizedProduct.price}$
            </Text>
            <Flex margin="0 0 2rem 0">
              <Counter productId={memoizedProduct.id} margin="0 1rem 0 0" />
              <Button
                border="1px solid"
                bordercolor={theme.colors.button}
                borderradius="24px"
                padding="0 2rem"
                backgroundcolor={theme.colors.button}
                color={theme.colors.white}
                backgroundcolorhover={theme.colors.buttonHover}
                onClick={handleAddToCart}
              >
                В корзину
              </Button>
            </Flex>
            <Text>{memoizedProduct.description}</Text>
          </Flex>
        </Flex>
      )}
    </>
  )
}
