import { MainContentContainer, MainContentTitle } from './styled'

export function MainContent({ section }: Props) {
  switch (section) {
    case 'section1':
      return (
        <MainContentContainer>
          <MainContentTitle> Section 1 </MainContentTitle>
        </MainContentContainer>
      )
    case 'section2':
      return (
        <MainContentContainer>
          <MainContentTitle> Section 2 </MainContentTitle>
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
