import styled from "styled-components";

interface StylesProps{
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    margin?: string;
    cursor?: string;
}

const StyledText = styled.div<StylesProps>`
    color: ${props => props.color || props.theme.colors.textColor};
    font-size: ${props => props.fontSize || '1rem'};
    font-weight: ${props => props.fontWeight || '400'};
    margin: ${props => props.margin || '0'};
    cursor: ${props => props.cursor || 'auto'};
`

const Text = (props: any) => {
    return <StyledText {...props} />
}

export default Text