import styled from 'styled-components'

interface StylesProps {
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
  padding?: string
  margin?: string
  width?: string
  height?: string
  flexWrap?: string
  backgroundColor?: string
  borderRadius?: string
}

const StyledFlex = styled.div<StylesProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  justify-content: ${(props) => props.justifyContent || 'stretch'};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderRadius || '0'};
  background-color: ${(props) => props.backgroundColor || 'unset'};
`

const Flex = (props: any) => {
  return <StyledFlex {...props} />
}

export default Flex
