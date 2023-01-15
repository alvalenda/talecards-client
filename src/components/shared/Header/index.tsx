import styled from 'styled-components'
import { ThemeButton } from '../ThemeButton'

type Props = {}

const HeaderSection = styled.header`
  position: fixed;
  top: 0.5em;
  left: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  height: 4em;
  width: calc(100% - 1em);
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};

  h1 {
    font-size: var(--font-size-xxxl);
    font-weight: 300;
  }

  .theme {
    position: absolute;
    top: 1rem;
    right: calc(50% - 12em);
  }

  transition: background-color 0.4s linear;
`

export function Header({}: Props) {
  return (
    <HeaderSection>
      <div className="title">
        <h1>Talespire Cards</h1>
      </div>
      <div className="theme">
        <ThemeButton />
      </div>
    </HeaderSection>
  )
}
