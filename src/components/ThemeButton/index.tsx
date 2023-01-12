import { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import styled from 'styled-components'
import { TalespireContext } from '../../shared/contexts/talespire/TalespireContext'
import { TalespireAction } from '../../shared/contexts/talespire/TalespireReducer'

type Props = {}

const StyledThemeButton = styled.button`
  border-radius: 50%;
  border: 1px solid transparent;
  padding: 0;
  width: 2.4em;
  height: 2.4em;
  font-size: 1em;
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  color: ${(props) => props.theme.colors.buttonText};
  cursor: pointer;
  transition: all 0.66s ease-in-out;

  svg {
    vertical-align: middle;
    align-self: center;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
export default function ThemeButton({}: Props) {
  const { darkMode, dispatch } = useContext<{
    darkMode: boolean
    dispatch: React.Dispatch<TalespireAction>
  }>(TalespireContext as any)

  const handleDarkMode = () => {
    dispatch({ type: 'darkMode', payload: !darkMode })
    console.log('Dark Mode: ', darkMode)
  }

  return (
    <StyledThemeButton onClick={handleDarkMode}>
      {darkMode ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
    </StyledThemeButton>
  )
}
