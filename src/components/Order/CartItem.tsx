import React from 'react'
import styled from 'styled-components'
import Text from '@components-common/Styled/Text'
import Flex from '@components-common/Styled/Flex'
import Image from '@components/common/Styled/Image'
import Counter from '@components/common/Counter/Counter'
import { theme } from '@/index'
import { IProduct } from '@models/ProductModel'

interface CartItemProps {
  product: IProduct
  quantity?: number
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

const CartItem: React.FC<CartItemProps & StylesProps> = ({ product, quantity, ...props }) => {
  return (
    <StyledCartItem {...props}>
      <Flex flexdirection="row" flexwrap="nowrap">
        <Image
          src={product.image}
          alt="product"
          borderradius="24px"
          height="70px"
          width="70px"
          objectfit="scale-down"
          backgroundcolor={theme.colors.white}
          margin="0 0.5rem 0 0"
          padding="0.2rem"
        />
        <Flex flexdirection="column">
          <Text fontWeight="600" margin="0 0 1rem 0">
            {product.title}
          </Text>
          <Flex flexdirection="row">
            <Text margin="0 1rem 0 0">Количество: {quantity}</Text>
            <Text fontWeight="600">{product.price} $</Text>
          </Flex>
        </Flex>
      </Flex>
    </StyledCartItem>
  )
}

export default CartItem
