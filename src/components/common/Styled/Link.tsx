import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledLinkProps {
    to: string;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  background-color: unset;
`

const LinkStyled = (props: any) => {
    return <StyledLink {...props} />
}

export default LinkStyled
