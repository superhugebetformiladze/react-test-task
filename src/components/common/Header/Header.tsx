import styled from "styled-components";
import Flex from "../Styled/Flex";
import Text from "../Styled/Text";


interface StylesProps {
    height?: string;
    width?: string;
}

const StyledHeader = styled.div<StylesProps>`
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
`

const Header = (props: any) => {
    return (
        <StyledHeader {...props}>
            <Flex flexDirection="row" alignItems="space-between">
                <Text cursor="pointer">Logo</Text>
                <>
                    <Text cursor="pointer">Main page</Text>
                    <Text cursor="pointer">Products</Text>
                </>
            </Flex>
        </StyledHeader>

    )
}

export default Header