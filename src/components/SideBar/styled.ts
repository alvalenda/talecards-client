import { NavLink, NavLinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const SidebarContainer = styled.nav<SidebarContainerProps>`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundVar};
  height: 100vh;
  width: ${({ expanded }) => (expanded === 'true' ? '200px' : '50px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease-in-out;
  position: relative;
`
export const SidebarLink = styled(NavLink)<ExpandSidebarLinkProps>`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  width: 90%;
  margin: 20px;
  padding: 10px 20px;
  text-justify: center;
  text-indent: 2rem;

  svg {
    position: absolute;
    top: 50%;
    left: 0.65rem;

    transform: translate(0, -50%);
  }

  &.active {
    color: ${({ theme }) => theme.colors.interactive};
    background-color: ${({ theme }) => theme.colors.background} !important;
  }
`
export const ExpandButton = styled.button<ExpandButtonProps>`
  position: absolute;
  bottom: 5rem;
  left: ${({ expanded }) => (expanded === 'true' ? '8rem' : '0.01rem')};
  border: ${({ expanded }) =>
    expanded === 'true' ? 'none' : '1px solid #333'};
  border-radius: 33%;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  font-size: var(--font-size-lg);
  width: 50px;
  height: 50px;

  transition: left 0.3s ease-in-out;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;

    transition: transform 0.3s ease-in-out;

    transform: translate(-50%, -50%)
      ${({ expanded }) =>
        expanded === 'true' ? 'rotate(270deg)' : 'rotate(90deg)'};
  }

  ${({ expanded }) =>
    expanded !== 'true' &&
    css`
      right: 0;
    `}

  &:hover {
    cursor: pointer;
    color: var(--color-white);
    background: ${({ theme }) => theme.colors.interactive};
  }
`

interface ExpandButtonProps extends React.HTMLProps<HTMLButtonElement> {
  expanded: string
}

interface ExpandSidebarLinkProps extends React.HTMLProps<NavLinkProps> {
  expanded: string
}

interface SidebarContainerProps extends React.HTMLProps<HTMLDivElement> {
  expanded: string
}
