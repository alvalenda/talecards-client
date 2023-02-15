import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const SidebarContainer = styled.nav<SidebarContainerProps>`
  background-color: #f5f5f5;
  height: 100vh;
  width: ${({ expanded }: { expanded: boolean }) =>
    expanded ? '200px' : '50px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease-in-out;
  position: relative;
`
export const SidebarLink = styled(NavLink)`
  color: #333;
  font-weight: bold;
  text-decoration: none;
  margin: 20px;
  &.active {
    color: #ff5733;
  }
`
export const ExpandButton = styled.button<ExpandButtonProps>`
  position: absolute;
  bottom: 5rem;
  left: ${({ expanded }) => (expanded ? '8rem' : '0.01rem')};
  border: ${({ expanded }) => (expanded ? 'none' : '1px solid #333')};
  border-radius: 33%;

  color: #333;
  font-size: var(--font-size-lg);
  width: 50px;
  height: 50px;
  background-color: #f5f5f5;

  transition: left 0.3s ease-in-out;

  ${({ expanded }) =>
    !expanded &&
    css`
      right: 0;
    `}

  &:hover {
    cursor: pointer;
    background: #ff5733;
  }
`

interface ExpandButtonProps extends React.HTMLProps<HTMLButtonElement> {
  expanded: boolean
}

interface SidebarContainerProps extends React.HTMLProps<HTMLDivElement> {
  expanded: boolean
}
