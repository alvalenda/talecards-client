import { UserMenuButton, UserMenuContainer } from './styled'
import { CiLogout } from 'react-icons/ci'
import { VscColorMode } from 'react-icons/vsc'
import { RiSettings5Fill } from 'react-icons/ri'

export function UserMenu({ expanded }: Props) {
  const handleClick = () => {}

  return (
    <UserMenuContainer expanded={expanded()}>
      <UserMenuButton onClick={handleClick} expanded={expanded()}>
        <RiSettings5Fill size={25} />
        {expanded() === `true` ? 'Preferências' : <>&nbsp;</>}
      </UserMenuButton>

      <UserMenuButton onClick={handleClick} expanded={expanded()}>
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
