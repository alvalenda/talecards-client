import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 100vw;
  box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.secondary};
  z-index: 1;
`
