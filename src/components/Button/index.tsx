import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
  handleClick?: () => void
}

const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.3em 0.6em;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 500;
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.buttonSecondary};
  color: ${(props) => props.theme.colors.buttonText};
  cursor: pointer;
  transition: all 0.66s ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.colors.buttonPrimary};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
export default function Button({
  children = 'Button',
  handleClick = () => {
    console.log('Clicked')
  },
}: Props) {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>
}
