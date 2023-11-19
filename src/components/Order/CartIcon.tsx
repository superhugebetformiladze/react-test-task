import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '@redux/actions/cartActions'
import { RootState } from '@redux/reducers/rootReducer'
import styled from 'styled-components'
import Flex from '@components/common/Styled/Flex'
import { theme } from '@/index'

interface StylesProps {
  padding?: string
  margin?: string
  width?: string
  height?: string
  backgroundcolor?: string
  borderradius?: string
  border?: string
  backgroundcolorhover?: string
}

const StyledCartIcon = styled.div<StylesProps>`
  position: fixed;
  z-index: 999;
  top: 7rem;
  right: 1rem;
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderradius || '0'};
  background-color: ${(props) => props.backgroundcolor || 'unset'};
  color: ${(props) => props.color || props.theme.colors.white};
  border: ${(props) => props.border || 'none'};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`

const FlexStyle = {
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
}

export const CartIcon: React.FC<StylesProps> = ({ ...props }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart)

  const handleCartIconClick = () => {
    if (cart.items.length > 0) {
      dispatch(openModal())
    }
  }

  return (
    <StyledCartIcon {...props}>
      {cart.items.length > 0 && (
        <Flex
          style={FlexStyle}
          padding="20px"
          backgroundcolor={theme.colors.button}
          borderradius="50%"
          width="fit-content"
          alignitems="center"
          justifycontent="center"
          onClick={handleCartIconClick}
        >
          <FontAwesomeIcon icon={faShoppingCart} size="2x" style={{ cursor: 'pointer' }} />
        </Flex>
      )}
    </StyledCartIcon>
  )
}
