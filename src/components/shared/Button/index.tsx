import styled from 'styled-components'

type Props = {
  text?: string
  handleClick?: () => void
  style?: 'primary' | 'secondary'
}

const StyledPrimaryButton = styled.button`
  border-radius: 8px;
  padding: 0.3em 0.6em;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: inherit;
  font-weight: 400;

  border: 2px solid transparent;
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  color: ${(props) => props.theme.colors.buttonSecondary};
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover,
    /* &:focus, */
    &:focus-visible {
    outline: none;
    border-color: ${(props) => props.theme.colors.interactive};

    background-color: ${(props) => props.theme.colors.interactive};
  }
`

const StyledSecondaryButton = styled.button`
  border-radius: 8px;
  padding: 0.3em 0.6em;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-family: inherit;
  font-weight: 400;

  border: 2px solid; // ${(props) => props.theme.colors.buttonSecondary};
  background-color: ${(props) => props.theme.colors.buttonSecondary};
  color: ${(props) => props.theme.colors.buttonPrimary};
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover,
    /* &:focus, */
    &:focus-visible {
    outline: none;
    border-color: ${(props) => props.theme.colors.interactive};

    color: ${(props) => props.theme.colors.interactive};
  }
`

export function Button({
  text = 'Button',
  handleClick = () => {
    console.log('Clicked')
  },
  style = 'primary',
}: Props) {
  if (style === 'primary') {
    return (
      <StyledPrimaryButton onClick={handleClick}>{text}</StyledPrimaryButton>
    )
  }

  return (
    <StyledSecondaryButton onClick={handleClick}>{text}</StyledSecondaryButton>
  )
}
