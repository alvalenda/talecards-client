import { Title } from '@/components/Title'
import { ThemeButton } from '@/components/shared/ThemeButton'
import styled from 'styled-components'
import { Button } from '@/components/shared/Button'

type Props = {}

const ScreenWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};

  transition: background-color 0.8s ease-in;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  place-items: center;
  margin: 0 auto;
  width: 16em;
`

export function Login({}: Props) {
  return (
    <ScreenWrapper>
      <Title />
      <ThemeButton />
      <h1>404 - Formulário</h1>
      <ButtonsWrapper>
        <Button style="primary">Faço Nada</Button>
        <Button style="secondary">Faço Tudo</Button>
      </ButtonsWrapper>
    </ScreenWrapper>
  )
}
