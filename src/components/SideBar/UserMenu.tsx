import { TalecardsContext } from '@/contexts/talecards/TalecardsContext'
import {
  TalecardsAction,
  TalecardsState,
} from '@/contexts/talecards/TalecardsReducer'
import { useContext } from 'react'
import { CiLogout } from 'react-icons/ci'
import { RiSettings5Fill } from 'react-icons/ri'
import { VscColorMode } from 'react-icons/vsc'
import { UserMenuButton, UserMenuContainer } from './styled'

export function UserMenu({ expanded }: Props) {
  const { darkMode, dispatch } = useContext<{
    darkMode: Partial<TalecardsState>
    dispatch: React.Dispatch<TalecardsAction>
  }>(TalecardsContext as any)

  const handleDarkMode = () => {
    dispatch({ type: 'darkMode', payload: !darkMode })
  }

  const handleClick = () => {}

  return (
    <UserMenuContainer expanded={expanded()}>
      <UserMenuButton onClick={handleClick} expanded={expanded()}>
        <RiSettings5Fill size={25} />
        {expanded() === `true` ? 'Preferências' : <>&nbsp;</>}
      </UserMenuButton>

      <UserMenuButton onClick={handleDarkMode} expanded={expanded()}>
        <VscColorMode size={25} />
        {expanded() === `true` ? 'Tema' : <>&nbsp;</>}
      </UserMenuButton>

      <UserMenuButton onClick={handleClick} expanded={expanded()}>
        <CiLogout size={25} />
        {expanded() === `true` ? 'Logout' : <>&nbsp;</>}
      </UserMenuButton>
    </UserMenuContainer>
  )
}

type Props = {
  expanded: () => string
}
