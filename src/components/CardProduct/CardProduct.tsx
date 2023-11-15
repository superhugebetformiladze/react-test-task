import styled from 'styled-components'
import { IProduct } from '@models/ProductModel'
import Flex from '@components-common/Styled/Flex'
import Text from '@components/common/Styled/Text'
import useWindowSize from '@hooks/useWindowSize'
import Image from '@components-common/Styled/Image'
import { theme } from '@/index'

interface ProductProps {
  product: IProduct
}

interface StylesProps {
  height?: string
  width?: string
  margin?: string
}

const StyledCardProduct = styled.div<StylesProps>`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  margin: ${(props) => props.margin || '0'};
  cursor: pointer;
`

const CardProduct = ({ product, ...props }: ProductProps & StylesProps) => {
  const { width } = useWindowSize()
  const isMobile = width && width <= 480
  return (
    <StyledCardProduct {...props}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        {isMobile ? (
          <Image
            src={product.image}
            alt="product"
            borderRadius="24px"
            height="14rem"
            width="100%"
            objectFit="scale-down"
            backgroundColor={theme.colors.white}
            margin="0 0 1rem"
            padding="1rem"
          />
        ) : (
          <Image
            src={product.image}
            alt="product"
            borderRadius="24px"
            height="18rem"
            width="100%"
            objectFit="scale-down"
            backgroundColor={theme.colors.white}
            margin="0 0 1rem"
            padding="1rem"
          />
        )}
        <Text margin="0 0 1rem" cursor="pointer">
          {product.title}
        </Text>
        <Text fontWeight="600" cursor="pointer">
          {product.price}$
        </Text>
      </Flex>
    </StyledCardProduct>
  )
}

export default CardProduct
