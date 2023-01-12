import { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import styled from 'styled-components'
import { TalespireContext } from '../../shared/contexts/talespire/TalespireContext'
import { TalespireAction } from '../../shared/contexts/talespire/TalespireReducer'

type Props = {}

const StyledThemeButton = styled.button`
  border-radius: 50%;
  border: 2px solid transparent;
  padding: 0;
  width: 2.4em;
  height: 2.4em;
  font-size: 1em;
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  color: ${(props) => props.theme.colors.buttonText};
  cursor: pointer;
  transition: background-color 0.66s ease-in-out, border-color 0.4s ease-in-out;

  svg {
    vertical-align: middle;
    align-self: center;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.interactive};
  }

  &:focus,
  &:focus-visible {
    border-color: ${(props) => props.theme.colors.interactive};
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
      {darkMode ? (
        <MdLightMode size={25} color={'#242424'} />
      ) : (
        <MdDarkMode size={25} />
      )}
    </StyledThemeButton>
  )
}
