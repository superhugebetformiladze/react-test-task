import React from 'react'
import { useParams } from 'react-router-dom'
import useWindowSize from '@hooks/useWindowSize'
import Flex from '@components-common/Styled/Flex'
import Image from '@components-common/Styled/Image'
import Text from '@components-common/Styled/Text'
import { useFetchProductById } from '@hooks/useFetchProductById'
import { theme } from '@/index'
import Counter from '@components-common/Counter/Counter'
import Button from '@components-common/Button/Button'
import { addToCart, closeModal, openModal } from '@redux/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from '@components/Order/OrderModal'
import { RootState } from '@redux/reducers/rootReducer'

export function ProductPage() {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const { width } = useWindowSize()
  const isTablet = width && width <= 768
  const isMobile = width && width <= 480

  const cart = useSelector((state: RootState) => state.cart)
  const counterValue = useSelector((state: RootState) => state.counter.data)

  const { product, isLoading } = useFetchProductById({ id: id })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!product) {
    return <p>No product found</p>
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product, counterValue))
    dispatch(openModal())
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
            src={product.image}
            alt="product"
            padding="2rem"
            backgroundcolor={theme.colors.white}
            borderradius="24px"
            margin="0 0 2rem 0"
            objectfit="scale-down"
          />
          <Flex flexdirection="column" flexgrow="1" padding="1rem 0 0 0">
            <Text fontWeight="600" fontSize="1.5rem" margin="0 0 1.3rem 0">
              {product.title}
            </Text>
            <Text fontWeight="600" fontSize="2rem" margin="0 0 1.3rem 0">
              {product.price}$
            </Text>
            <Flex
              margin="0 0 2rem 0"
              flexdirection={isMobile ? 'column' : 'row'}
              width="fit-content"
            >
              <Counter margin={isMobile ? '0 0 0.5rem 0' : '0 1rem 0 0'} />
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
            <Text>{product.description}</Text>
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
            src={product.image}
            alt="product"
            padding="2rem"
            backgroundcolor={theme.colors.white}
            borderradius="24px"
            margin="0 2rem 0 0"
            objectfit="scale-down"
          />
          <Flex flexdirection="column" flexgrow="1" padding="1rem 0 0 0">
            <Text fontWeight="600" fontSize="1.5rem" margin="0 0 1.5rem 0">
              {product.title}
            </Text>
            <Text fontWeight="600" fontSize="2rem" margin="0 0 1.5rem 0">
              {product.price}$
            </Text>
            <Flex margin="0 0 2rem 0">
              <Counter margin="0 1rem 0 0" />
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
            <Text>{product.description}</Text>
          </Flex>
        </Flex>
      )}
      <ModalComponent isOpen={cart.isModalOpen} onClose={() => dispatch(closeModal())} />
    </>
  )
}
