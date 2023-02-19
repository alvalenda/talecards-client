import { MainContentContainer, MainContentTitle } from './styled'

export function MainContent({ section }: Props) {
  switch (section) {
    case 'section1':
      return (
        <MainContentContainer>
          <MainContentTitle> Personagem </MainContentTitle>
          {/* <CharacterSheet /> */}

          {/* <CharacterSheetForm /> */}
        </MainContentContainer>
      )
    case 'section2':
      return (
        <MainContentContainer>
          <MainContentTitle> Monstro </MainContentTitle>
          {/* <MonsterSheet /> */}

          {/* <MonsterSheetForm /> */}
        </MainContentContainer>
      )
    default:
      return (
        <MainContentContainer>
          <MainContentTitle> Home </MainContentTitle>
        </MainContentContainer>
      )
  }
}

type Props = {
  section: string
}
