import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Flex from '@components-common/Styled/Flex'
import Text from '@components-common/Styled/Text'
import Button from '@components-common/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  decrementGlobalQuantity,
  increment,
  incrementGlobalQuantity,
  setGlobalQuantity,
  setInitialValue,
} from '@redux/actions/counterActions'
import { RootState } from '@redux/reducers/rootReducer'
import { useNavigate } from 'react-router-dom'

interface CounterProps {
  productId: number
  initialValue?: number
  onChange?: (productId: number, newQuantity: number) => void
}

interface StylesProps {
  height?: string
  width?: string
  margin?: string
}

const StyledCounter = styled.div<StylesProps>`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  margin: ${(props) => props.margin || '0'};
`

const Counter: React.FC<CounterProps & StylesProps> = ({
  productId,
  initialValue = 1,
  onChange,
  ...props
}) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(initialValue)
  const isModalOpen = useSelector((state: RootState) => state.cart.isModalOpen)
  const globalQuantity = useSelector((state: RootState) => state.counter.globalQuantity)
  const navigate = useNavigate()

  useEffect(() => {
    setQuantity(initialValue)
    dispatch(setInitialValue(productId, initialValue))
  }, [dispatch, initialValue, productId])

  useEffect(() => {
    dispatch(setGlobalQuantity(1))
  }, [navigate, dispatch])

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity - 1, 1)
      if (!isModalOpen) {
        dispatch(decrementGlobalQuantity())
      }
      dispatch(decrement())
      onChange && onChange(productId, newQuantity)
      return newQuantity
    })
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.min(prevQuantity + 1, 100)
      if (!isModalOpen) {
        dispatch(incrementGlobalQuantity())
      }
      dispatch(increment())
      onChange && onChange(productId, newQuantity)
      return newQuantity
    })
  }

  return (
    <StyledCounter {...props}>
      <Flex
        border="1px solid"
        width="fit-content"
        padding="5px 20px"
        borderradius="24px"
        alignitems="center"
      >
        <Button
          padding="5px 10px"
          borderradius="24px"
          margin="0 10px 0 0"
          onClick={handleDecrement}
        >
          -
        </Button>
        {isModalOpen ? (
          <Text margin="0 10px 0 0">{quantity}</Text>
        ) : (
          <Text margin="0 10px 0 0">{globalQuantity}</Text>
        )}

        <Button padding="5px 10px" borderradius="24px" onClick={handleIncrement}>
          +
        </Button>
      </Flex>
    </StyledCounter>
  )
}

export default Counter
