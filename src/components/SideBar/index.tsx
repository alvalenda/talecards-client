import { useState } from 'react'
import { MdOutlineExpandLess } from 'react-icons/md'
import { HiHome } from 'react-icons/hi'
import { SiHomebrew } from 'react-icons/si'
import { GiBestialFangs } from 'react-icons/gi'
import { ExpandButton, SidebarContainer, SidebarLink } from './styled'

export function Sidebar() {
  const [expanded, setExpanded] = useState<boolean>(true)

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  const getExpanded = () => {
    return expanded.toString()
  }

  return (
    <SidebarContainer expanded={getExpanded()}>
      <SidebarLink to="/" expanded={getExpanded()} tabIndex={0}>
        <HiHome size={25} />
        {getExpanded() === `true` ? 'Home' : <>&nbsp;</>}
      </SidebarLink>

      <SidebarLink to="/section1" expanded={getExpanded()}>
        <GiBestialFangs size={25} />
        {getExpanded() === `true` ? 'Bestiário' : <>&nbsp;</>}
      </SidebarLink>

      <SidebarLink to="/section2" expanded={getExpanded()}>
        <SiHomebrew size={25} />
        {getExpanded() === `true` ? 'Homebrew' : <>&nbsp;</>}
      </SidebarLink>

      <ExpandButton onClick={handleExpand} expanded={getExpanded()}>
        <MdOutlineExpandLess size={30} />
      </ExpandButton>
    </SidebarContainer>
  )
}
