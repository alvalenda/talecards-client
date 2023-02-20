import styled from 'styled-components'

export const MonsterSheetCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: initial;
  gap: 0;
  width: 35rem;
  height: 20rem;
  background-color: ${({ theme }) => theme.colors.backgroundVar};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px;
  transition: all 400ms ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  }
`
export const MonsterSheetCardName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 100%;
  font-size: var(--font-size-xxl);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`

export const MonsterSheetCharacteristics = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 4rem;
  margin: 5px 0 10px 0;
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

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`
export const MonsterSheetTraits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 4rem;
  margin: 0;
  padding: 0;
`
export const MonsterSheetTraitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100%;
`

export const MonsterSheetTraitLabel = styled.span`
  font-size: var(--font-size-md);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  margin: 0;
  padding: 0 0 0 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

export const MonsterSheetTraitValue = styled.span`
  font-family: inherit;
  background-color: rgba(150, 150, 150, 0.3);
  border-radius: 10px;
  font-size: var(--font-size-sm);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 0 5px;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

export const MonsterSheetSkills = styled(MonsterSheetTraits)`
  flex-direction: row;
  align-items: center;
  height: 2.5rem;
  margin: 0;
  padding: 0;
`
export const MonsterSheetSkillLabel = styled(MonsterSheetTraitLabel)`
  margin-right: 5px;
`
export const MonsterSheetSkillValue = styled(MonsterSheetTraitValue)`
  margin-right: 5px;
`

export const MonsterSheetTalents = styled(MonsterSheetSkills)``

export const MonsterSheetTalentLabel = styled(MonsterSheetSkillLabel)``
export const MonsterSheetTalentValue = styled(MonsterSheetSkillValue)``

export const MonsterSheetDescription = styled(MonsterSheetSkills)``
export const MonsterSheetDescriptionLabel = styled(MonsterSheetSkillLabel)``
export const MonsterSheetDescriptionValue = styled(MonsterSheetSkillValue)``
