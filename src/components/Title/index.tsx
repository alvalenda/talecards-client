import styled from 'styled-components'

type Props = {}

const StyledTitle = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
`

export function Title({}: Props) {
  return (
    <div>
      <StyledTitle>Hello World of Styled Components!</StyledTitle>
    </div>
  )
}
