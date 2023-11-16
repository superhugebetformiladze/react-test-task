import styled from 'styled-components'

interface StylesProps {
  padding?: string
  margin?: string
  backgroundcolor?: string
  flexgrow?: string
  width?: string
  height?: string
}

const StyledContainer = styled.div<StylesProps>`
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  background-color: ${(props) => props.backgroundcolor || 'unset'};
  flex-grow: ${(props) => props.flexgrow || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`

const Container = (props: any) => {
  return <StyledContainer {...props} />
}

export default Container
