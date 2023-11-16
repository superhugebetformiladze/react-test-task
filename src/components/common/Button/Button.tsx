import styled from 'styled-components'

interface StylesProps {
  width?: string
  padding?: string
  margin?: string
  border?: string
  borderradius?: string
  bordercolor?: string
  bordercolorhover?: string
  backgroundcolor?: string
  backgroundcolorhover?: string
  colorhover?: string
}

const StyledButton = styled.button<StylesProps>`
  text-align: center;
  text-wrap: nowrap;
  user-select: none;
  width: ${(props) => props.width || 'auto'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  background-color: ${(props) => props.backgroundcolor || 'unset'};
  color: ${(props) => props.color || props.theme.colors.button};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderradius || '0'};
  border-color: ${(props) => props.bordercolor || props.theme.colors.button};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.backgroundcolorhover || props.theme.colors.button};
    border-color: ${(props) => props.color || props.bordercolorhover || props.theme.colors.button};
    color: ${(props) => props.color || props.colorhover || 'unset'};
    cursor: pointer;
  }
`

const Button = (props: any) => {
  return <StyledButton {...props} />
}

export default Button
