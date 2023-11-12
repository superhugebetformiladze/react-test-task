import styled from "styled-components";

interface StylesProps{
    padding?: string;
    margin?: string;
    border?: string;
    borderRadius?: string;
    borderColor?: string;
    borderColorHover?: string;
    backgroundColor?: string;
    backgroundColorHover?: string;
    colorHover?: string;
}

const StyledButton = styled.div<StylesProps>`
    text-align: center;
    text-wrap: nowrap;
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    background-color: ${props => props.backgroundColor || 'unset'};
    color: ${props => props.color || props.theme.colors.button};
    border: ${props => props.border || 'none'};
    border-radius: ${props => props.borderRadius || '0'};
    border-color: ${props => props.borderColor || props.theme.colors.button};
    transition: all 0.3s ease;

    &:hover {
        background-color: ${props => props.backgroundColorHover || props.theme.colors.button};
        border-color: ${props => props.color || props.borderColorHover || props.theme.colors.button};
        color: ${props => props.color || props.colorHover || 'unset'};
        cursor: pointer;
    }
`

const Button = (props: any) => {
    return <StyledButton {...props} />
}

export default Button