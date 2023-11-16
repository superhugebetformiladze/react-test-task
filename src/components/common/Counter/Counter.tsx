import React, { useEffect } from 'react'
import styled from 'styled-components'
import Flex from '@components-common/Styled/Flex'
import Text from '@components-common/Styled/Text'
import Button from '@components-common/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/reducers/rootReducer'
import { decrement, increment, setInitialValue } from '@redux/actions/counterActions'

interface CounterProps {
  initialValue?: number
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

const Counter: React.FC<CounterProps & StylesProps> = ({ initialValue = 0, ...props }) => {
  const dispatch = useDispatch()
  const { counter } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(setInitialValue(initialValue))
  }, [dispatch, initialValue])

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
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <Text margin="0 10px 0 0">{counter.data}</Text>
        <Button padding="5px 10px" borderradius="24px" onClick={() => dispatch(decrement())}>
          -
        </Button>
      </Flex>
    </StyledCounter>
  )
}

export default Counter
