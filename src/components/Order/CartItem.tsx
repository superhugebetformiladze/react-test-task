import React from 'react'
import styled from 'styled-components'
import Text from '@components-common/Styled/Text'
import Flex from '@components-common/Styled/Flex'
import Button from '@components-common/Button/Button'
import Image from '@components/common/Styled/Image'
import { theme } from '@/index'
import { IProduct } from '@models/ProductModel'
import Counter from '@components/common/Counter/Counter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import useWindowSize from '@hooks/useWindowSize'
import { useCartCookie } from '@cookies/cartCookies'

interface CartItemProps {
  product: IProduct
  quantity?: number
  onChangeQuantity?: (productId: number, newQuantity: number) => void
  onRemove?: (productId: number) => void
}

interface StylesProps {
  padding?: string
  margin?: string
  width?: string
  height?: string
  borderradius?: string
  border?: string
}

const StyledCartItem = styled.div<StylesProps>`
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderradius || '0'};
  border: ${(props) => props.border || 'none'};
`

const CartItem: React.FC<CartItemProps & StylesProps> = ({
  product,
  quantity,
  onChangeQuantity,
  onRemove,
  ...props
}) => {
  const { width } = useWindowSize()
  const isMobile = width && width <= 480
  const { updateQuantity } = useCartCookie()

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
  }

  const handleRemoveClick = () => {
    onRemove && onRemove(product.id)
  }

  return (
    <StyledCartItem {...props}>
      <Flex flexdirection="row" flexwrap="nowrap">
        <Image
          src={product.image}
          alt="product"
          height="70px"
          width="70px"
          objectfit="scale-down"
          backgroundcolor={theme.colors.white}
          margin="0 0.5rem 0 0"
          padding="0.2rem"
        />
        <Flex flexdirection="column">
          <Text fontWeight="600" margin="0 0.5rem 1rem 0" fontSize={isMobile ? '0.8rem' : '1rem'}>
            {product.title}
          </Text>
          <Flex flexdirection="row" alignitems="center">
            <Counter
              productId={product.id}
              margin={isMobile ? '0 0.4rem 0 0' : '0 1rem 0 0'}
              initialValue={quantity}
              onChange={handleQuantityChange}
            />
            <Text fontWeight="600">{product.price} $</Text>
          </Flex>
        </Flex>
        <Button
          onClick={handleRemoveClick}
          backgroundcolor={theme.colors.button}
          color={theme.colors.white}
          borderradius="24px"
          padding="5px 10px"
          margin="0 0 0 auto"
          height="fit-content"
        >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </Flex>
    </StyledCartItem>
  )
}

export default CartItem
