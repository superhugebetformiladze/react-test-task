import styled from "styled-components";

interface StylesProps{
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    padding?: string;
    margin?: string;
    bacgroundColor?: string;
}

const StyledFlex = styled.div<StylesProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    align-items: ${props => props.alignItems || 'stretch'};
    justify-content: ${props => props.justifyContent || 'stretch'};
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    background-color: ${props => props.color || 'unset'};
`

const Flex = (props: any) => {
    return <StyledFlex {...props} />
}

export default Flex