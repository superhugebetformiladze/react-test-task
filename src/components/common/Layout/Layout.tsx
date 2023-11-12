import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Flex from "../Styled/Flex";

const AppWrapper = styled.div`
  background-color: ${props => props.color || props.theme.colors.primary};
  min-height: 100vh;
`
const MainContent = styled.main`
  width: 100%;
`;

export default function Layout({ children }: any) {

    return (
        <AppWrapper>
            <Flex flexDirection="column" alignItems="center" justifyContent="center" padding="1rem">
                <Header></Header>
                <MainContent>{children}</MainContent>
            </Flex>
            <Footer></Footer>
        </AppWrapper>
    )

}
