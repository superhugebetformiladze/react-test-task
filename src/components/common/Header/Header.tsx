import styled from "styled-components";
import Flex from "../Styled/Flex";
import Text from "../Styled/Text";
import { Link } from 'react-router-dom'



interface StylesProps {
    height?: string;
    width?: string;
    bacgroundColor?: string;
}

const StyledHeader = styled.div<StylesProps>`
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || '100%'};
    background-color: ${props => props.color || props.theme.colors.header};
    border-radius: 24px;
`
const linkStyle = {
    backgroundColor: 'unset',
};

const Header = (props: any) => {
    return (
        <StyledHeader {...props}>
            <Flex flexDirection="row" alignItems="center" justifyContent="space-between" padding="1rem 2rem">
                <Link to="/" style={linkStyle}>
                    <Text fontWeight="600" cursor="pointer" fontSize="2rem">Logo</Text>
                </Link>
                <Flex flexDirection="row" alignItems="center">
                    <Link to="/" style={linkStyle}>
                        <Text cursor="pointer" margin="0 1rem 0 0">Main page</Text>
                    </Link>
                    <Link to="/categories" style={linkStyle}>
                        <Text cursor="pointer">Products</Text>
                    </Link>
                </Flex>
            </Flex>
        </StyledHeader>

    )
}

export default Header