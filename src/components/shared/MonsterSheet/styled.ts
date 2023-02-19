import styled from 'styled-components'

// cards containing monster data
export const MonsterSheetCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 18rem;
  background-color: ${({ theme }) => theme.colors.backgroundVar};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin: 1rem;
  transition: all 400ms ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h2 {
    position: absolute;
    top: 0;
    left: 0;
    font-size: var(--font-size-xxl);
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 1rem;
    text-align: center;
  }

  div.monster-sheet-card__characteristics {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 4rem;
    margin: 0;
    padding: 0;

    div.monster-sheet-card__characteristics__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1px solid ${({ theme }) => theme.colors.primary};
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;

      span.monster-sheet-card__characteristics__item__label {
        font-size: var(--font-size-md);
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 400;
        margin: 0;
        padding: 0;
        text-align: center;
        width: 100%;

        @media (max-width: 768px) {
          font-size: var(--font-size-sm);
        }
      }
      span.monster-sheet-card__characteristics__item__value {
        font-family: inherit;
        font-size: var(--font-size-md);
        font-weight: 400;
        color: ${({ theme }) => theme.colors.primary};
        margin: 0;
        padding: 0;

        @media (max-width: 768px) {
          font-size: var(--font-size-md);
        }
      }
    }

    div.monster-sheet-card__characteristics__item:last-child {
      border-right: none;
    }
  }
`
