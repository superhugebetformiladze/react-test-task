import styled from "styled-components";
import { IProduct } from "../../models";
import Flex from "../common/Styled/Flex";
import Text from "../common/Styled/Text";
import useWindowSize from "../../hooks/useWindowSize";


interface ProductProps {
    product: IProduct
}

interface StylesProps {
    height?: string;
    width?: string;
    margin?: string;
}

interface StylesImgProps {
    height?: string;
    width?: string;
}

const StyledCardProduct = styled.div<StylesProps>`
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
    margin: ${props => props.margin || '0'};
    cursor: pointer;
`

const StyleImage = styled.img`
    border-radius: 24px;
    height: ${props => props.height || '18rem'};
    width: 100%;
    object-fit: scale-down;
    background-color: ${props => props.color || props.theme.colors.white};
    margin: 0 0 1rem;
    padding: 1rem;
`

const CardProduct = ({ product, ...props }: ProductProps & StylesProps) => {
    const { width } = useWindowSize();
    const isMobile = width && width <= 480;
    return (
        <StyledCardProduct {...props}>
            <Flex flexDirection="column" alignItems="center" justifyContent="center">
                {isMobile ? (<StyleImage src={product.image} alt="product" height="14rem"/>) : 
                (<StyleImage src={product.image} alt="product" />)}

                <Text margin="0 0 1rem" cursor="pointer">{product.title}</Text>
                <Text fontWeight="600" cursor="pointer">{product.price}$</Text>
            </Flex>
        </StyledCardProduct>
    )
}

export default CardProduct