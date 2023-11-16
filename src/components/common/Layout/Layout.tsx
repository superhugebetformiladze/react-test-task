import styled from 'styled-components'
import Footer from '@components-common/Footer/Footer'
import Header from '@components-common/Header/Header'
import Container from '@components-common/Styled/Container'

const AppWrapper = styled.div`
  background-color: ${(props) => props.color || props.theme.colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const MainContent = styled.main`
  width: 100%;
`

export default function Layout({ children }: any) {
  return (
    <AppWrapper>
      <Container padding="1rem" flexgrow="1">
        <Header></Header>
        <MainContent>{children}</MainContent>
      </Container>
      <Footer></Footer>
    </AppWrapper>
  )
}
