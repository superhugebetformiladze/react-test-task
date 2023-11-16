import styled from 'styled-components'

interface StylesProps {
  padding?: string
  margin?: string
  backgroundcolor?: string
  flexgrow?: string
}

const StyledContainer = styled.div<StylesProps>`
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  background-color: ${(props) => props.backgroundcolor || 'unset'};
  flex-grow: ${(props) => props.flexgrow || '0'};
`

const Container = (props: any) => {
  return <StyledContainer {...props} />
}

export default Container
