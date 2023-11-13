import styled from "styled-components";

interface StylesProps{
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    flexGrow?: string;
}

const StyledContainer = styled.div<StylesProps>`
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    background-color: ${props => props.backgroundColor || 'unset'};
    flex-grow: ${props => props.flexGrow || '0'};
`

const Container = (props: any) => {
    return <StyledContainer {...props} />
}

export default Container