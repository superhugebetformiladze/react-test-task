import styled from 'styled-components'

interface StylesProps {
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
  margin?: string
  padding?: string
  cursor?: string
  bacgroundColor?: string
  width?: string
  height?: string
  textalign?: string
  bordercolorhover?: string
  backgroundcolorhover?: string
  colorhover?: string
}

const StyledText = styled.div<StylesProps>`
  color: ${(props) => props.color || props.theme.colors.textColor};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || '400'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  cursor: ${(props) => props.cursor || 'auto'};
  background-color: ${(props) => props.bacgroundColor || 'unset'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  text-align: ${(props) => props.textalign || 'unset'};
  &:hover {
    background-color: ${(props) => props.backgroundcolorhover || 'unset'};
    border-color: ${(props) => props.color || props.bordercolorhover || 'unset'};
    color: ${(props) => props.color || props.colorhover || 'unset'};
  }
`

const Text = (props: any) => {
  return <StyledText {...props} />
}

export default Text
