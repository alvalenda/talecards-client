import { Title } from '@/components/Title'
import { ThemeButton } from '@/components/shared/ThemeButton'
import styled from 'styled-components'
import { Button } from '@/components/shared/Button'

type Props = {}

const ScreamWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};

  transition: background-color 0.8s ease-in;
`

export function Login({}: Props) {
  return (
    <ScreamWrapper>
      <Title />
      <ThemeButton />
      <h1>404</h1>
      <Button>Faço Nada</Button>
    </ScreamWrapper>
  )
}
