import styled from 'styled-components'

type Props = {
  text: string
}

const StyledTitle = styled.h1`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  font-size: var(--font-size-xxl);
  line-height: 1.1;
  text-align: center;
  transition: all 0.4s linear;
`

export function Title({ text }: Props) {
  return (
    <div>
      <StyledTitle>{text}</StyledTitle>
    </div>
  )
}
