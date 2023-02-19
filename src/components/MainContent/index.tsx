import { MonsterSheet } from '../shared/MonsterSheet'
import {
  MainContentContainer,
  MainContentTitle,
  MainContentTitleContainer,
} from './styled'

export function MainContent({ section }: Props) {
  switch (section) {
    case 'section1':
      return (
        <MainContentContainer>
          <MainContentTitleContainer>
            <MainContentTitle> Personagem </MainContentTitle>
          </MainContentTitleContainer>
          {/* <CharacterSheet /> */}

          {/* <CharacterSheetForm /> */}
        </MainContentContainer>
      )
    case 'section2':
      return (
        <MainContentContainer>
          <MainContentTitleContainer>
            <MainContentTitle> Monstro </MainContentTitle>
          </MainContentTitleContainer>
          <MonsterSheet />

          {/* <MonsterSheetForm /> */}
        </MainContentContainer>
      )
    default:
      return (
        <MainContentContainer>
          <MainContentTitleContainer>
            <MainContentTitle> Home </MainContentTitle>
          </MainContentTitleContainer>
        </MainContentContainer>
      )
  }
}

type Props = {
  section: string
}
