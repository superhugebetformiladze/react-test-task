import { theme } from '@/index'
import React from 'react'
import { PuffLoader } from 'react-spinners'
import Flex from '../Styled/Flex'

const LoadingSpinner = () => {
  return (
    <Flex width="100%" alignitems="center" justifycontent="center" padding="3rem 2rem">
      <PuffLoader color={theme.colors.button} loading={true} />
    </Flex>
  )
}

export default LoadingSpinner
