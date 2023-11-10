import styled from "styled-components";
import { IProduct } from "../models";
import Flex from "./common/Styled/Flex";
import Text from "./common/Styled/Text";


interface ProductProps {
    product: IProduct
}

interface StylesProps {
    height?: string;
    width?: string;
}

const StyledCardProduct = styled.div<StylesProps>`
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
    cursor: pointer;
`

const StyleImage = styled.img`
    border-radius: 24px;
    height: 18rem;
    width: 100%;
    object-fit: scale-down;
    background-color: ${props => props.color || props.theme.colors.white};
    margin: 0 0 1rem;
    padding: 1rem;
`

const CardProduct = ({ product, ...props }: ProductProps & StylesProps) => {
    return (
        <StyledCardProduct {...props}>
            <Flex flexDirection="column" alignItems="center" justifyContent="center"> 
                <StyleImage src={product.image} alt="product" />
                <Text margin="0 0 1rem" cursor="pointer">{product.title}</Text>
                <Text fontWeight="600" cursor="pointer">{product.price}$</Text>
            </Flex>
        </StyledCardProduct>
    )
}

export default CardProduct