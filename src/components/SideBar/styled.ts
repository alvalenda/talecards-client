import { NavLink, NavLinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const SidebarContainer = styled.nav<SidebarContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.2), 0 0 5px 0 rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundVar};
  width: ${({ expanded }) => (expanded === 'true' ? '200px' : '50px')};
  transition: width 0.3s ease-in-out;
  z-index: 1;
`
export const SidebarLink = styled(NavLink)<ExpandSidebarLinkProps>`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  width: 90%;
  margin: 5px;
  padding: 10px 20px;
  text-justify: center;
  text-indent: 2rem;
  overflow: hidden;

  svg {
    position: absolute;
    top: 50%;
    left: 0.65rem;

    transform: translate(0, -50%);
  }

  &:hover,
  &:focus-visible {
    color: var(--color-white);
    background: ${({ theme }) => theme.colors.interactive};
  }

  &.active {
    color: ${({ theme }) => theme.colors.interactive};
    background-color: ${({ theme }) => theme.colors.background} !important;
  }
`
export const ExpandButton = styled.button<ExpandButtonProps>`
  position: absolute;
  bottom: calc(50% - 4rem);
  left: 0;
  border: none;
  box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.2), 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0 5px 5px 0;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundVar};
  font-size: var(--font-size-lg);
  width: ${({ expanded }) => (expanded === 'true' ? '202px' : '70px')};
  height: 60px;
  z-index: 1;

  transition: left 0.3s ease-in-out, width 0.3s ease-in-out;

  svg {
    position: absolute;
    top: 50%;
    left: calc(100% - 0.65rem);

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

  &:hover, &:focus-visible {
    cursor: pointer;
    color: var(--color-white);
    background: ${({ theme }) => theme.colors.interactive};
  }
`

export const SidebarLinkContainer = styled.div<SidebarContainerProps>`
  position: absolute;
  top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ expanded }) => (expanded === 'true' ? '200px' : '50px')};
  transition: width 0.3s ease-in-out;
`

export const UserMenuButton = styled.button<UserMenuButtonProps>`
  position: relative;
  background: none;
  border: none;
  outline: inherit;
  text-decoration: none;
  color: inherit;
  font: inherit;
  border-radius: 5px;
  font-weight: 600;
  width: ${({ expanded }) => (expanded === 'true' ? '88%' : '45px')};
  margin: ${({ expanded }) => (expanded === 'true' ? '5px 10px' : '5px 0px')};
  padding: 10px 0;
  text-indent: 3rem;
  text-align: left;
  overflow: hidden;
  cursor: pointer;

  transition: width 0.3s ease-in-out, margin 0.3s ease-in-out;

  svg {
    position: absolute;
    top: 50%;
    left: ${({ expanded }) => (expanded === 'true' ? '0.65rem' : '0.6rem')};
    transform: translate(0, -50%);
  }

  &:hover,
  &:focus-visible {
    color: var(--color-white);
    background: ${({ theme }) => theme.colors.interactive};
  }
`

export const UserMenuContainer = styled.div<SidebarContainerProps>`
  position: absolute;
  top: calc(100% - 12rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px 0;
  padding-left: ${({ expanded }) => (expanded === 'true' ? '0' : '2px')};
  margin-top: 10px;
  border-top: 1px solid rgba(155, 155, 155, 0.5);
  /* box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.2), 0 0 5px 0 rgba(0, 0, 0, 0.2); */

  width: ${({ expanded }) => (expanded === 'true' ? '200px' : '50px')};
  z-index: 1;

  transition: width 0.3s ease-in-out;
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

interface UserMenuButtonProps extends React.HTMLProps<HTMLButtonElement> {
  expanded: string
}
