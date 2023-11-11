import styled from "styled-components";

interface StylesProps{
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    padding?: string;
    margin?: string;
    bacgroundColor?: string;
}

const StyledContainer = styled.div<StylesProps>`
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    background-color: ${props => props.color || 'unset'};
`

const Container = (props: any) => {
    return <StyledContainer {...props} />
}

export default Container