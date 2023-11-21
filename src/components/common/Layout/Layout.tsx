import styled from 'styled-components'
import Footer from '@components-common/Footer/Footer'
import Header from '@components-common/Header/Header'
import Container from '@components-common/Styled/Container'
import { CartIcon } from '@components/Order/CartIcon'
import OrderModal from '@components/Order/OrderModal'
import { closeModal } from '@redux/actions/cartActions'
import { RootState } from '@redux/reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'

interface AppProps {
  modalopen: boolean
}

const AppWrapper = styled.div<AppProps>`
  background-color: ${(props) => props.color || props.theme.colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: ${(props) => (props.modalopen ? 'hidden' : 'auto')};
`
const MainContent = styled.main`
  width: 100%;
`

export default function Layout({ children }: any) {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.isModalOpen)
  return (
    <AppWrapper modalopen={cart}>
      <Container padding="1rem" flexgrow="1">
        <Header></Header>
        <MainContent>
          <CartIcon></CartIcon>
          {children}
        </MainContent>
      </Container>
      <Footer></Footer>
      <OrderModal isOpen={cart} onClose={() => dispatch(closeModal())} />
    </AppWrapper>
  )
}
