import { useState } from 'react'
import { ExpandButton, SidebarContainer, SidebarLink } from './styled'

export function Sidebar() {
  const [expanded, setExpanded] = useState(true)

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <SidebarContainer expanded={expanded}>
      <SidebarLink to="/" tabIndex={0}>
        Home
      </SidebarLink>
      <SidebarLink to="/section1">Section 1</SidebarLink>
      <SidebarLink to="/section2">Section 2</SidebarLink>
      <ExpandButton onClick={handleExpand} expanded={expanded}>
        {expanded ? '<' : '>'}
      </ExpandButton>
    </SidebarContainer>
  )
}
