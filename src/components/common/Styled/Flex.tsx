import styled from 'styled-components'

interface StylesProps {
  flexdirection?: string
  alignitems?: string
  justifycontent?: string
  padding?: string
  margin?: string
  width?: string
  height?: string
  flexwrap?: string
  backgroundcolor?: string
  borderradius?: string
  border?: string
  backgroundcolorhover?: string
}

const StyledFlex = styled.div<StylesProps>`
  display: flex;
  flex-direction: ${(props) => props.flexdirection || 'row'};
  align-items: ${(props) => props.alignitems || 'stretch'};
  justify-content: ${(props) => props.justifycontent || 'stretch'};
  flex-wrap: ${(props) => props.flexwrap || 'wrap'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderradius || '0'};
  background-color: ${(props) => props.backgroundcolor || 'unset'};
  border: ${(props) => props.border || 'none'};
`

const Flex = (props: any) => {
  return <StyledFlex {...props} />
}

export default Flex
