import { Modifier } from '../types/dice-roll'

export const testDifficult: TestDifficult[] = [
  { difficult: 'Muito Fácil', modifier: 60 },
  { difficult: 'Fácil', modifier: 40 },
  { difficult: 'Mediana', modifier: 20 },
  { difficult: 'Desafiadora', modifier: 0 },
  { difficult: 'Complicada', modifier: -10 },
  { difficult: 'Difícil', modifier: -20 },
  { difficult: 'Muito Difícil', modifier: -30 },
]

export const testSuccessOutcomes: TestOutcome[] = [
  { sl: 0, outcome: 'Sucesso Marginal' },
  { sl: 1, outcome: 'Sucesso Marginal' },
  { sl: 2, outcome: 'Sucesso' },
  { sl: 3, outcome: 'Sucesso' },
  { sl: 4, outcome: 'Sucesso Impressionante' },
  { sl: 5, outcome: 'Sucesso Impressionante' },
  { sl: 6, outcome: 'Sucesso Extraordinário' },
]

export const testFailureOutcomes: TestOutcome[] = [
  { sl: 0, outcome: 'Falha Marginal' },
  { sl: -1, outcome: 'Falha Marginal' },
  { sl: -2, outcome: 'Falha' },
  { sl: -3, outcome: 'Falha' },
  { sl: -4, outcome: 'Falha Desastrosa' },
  { sl: -5, outcome: 'Falha Desastrosa' },
  { sl: -6, outcome: 'Falha Catastrófica' },
]

// como validar resultRange?

export const bodyPartsTable: BodyPartsOption[] = [
  { bodyPart: 'Cabeça', resultRange: [1, 9] },
  {
    bodyPart: 'Braço Primário',
    resultRange: [10, 24],
  },
  {
    bodyPart: 'Braço Secundário',
    resultRange: [25, 44],
  },
  { bodyPart: 'Tronco', resultRange: [45, 79] },
  {
    bodyPart: 'Perna Primária',
    resultRange: [80, 89],
  },
  {
    bodyPart: 'Perna Secundária',
    resultRange: [90, 100],
  },
]

export const testDifficultOptions = testDifficult.map((difficult) => ({
  difficult: difficult.difficult,
  modifier: difficult.modifier,
}))

export type TestOutcome = {
  sl: number
  outcome: string
}

export type TestDifficult = {
  difficult: Difficulties
  modifier: Modifier
}

export type Difficulties =
  | 'Muito Fácil'
  | 'Fácil'
  | 'Mediana'
  | 'Desafiadora'
  | 'Complicada'
  | 'Difícil'
  | 'Muito Difícil'

export type BodyPartsOption = {
  bodyPart: BodyParts
  resultRange: [number, number]
}
export type BodyParts =
  | 'Cabeça'
  | 'Braço'
  | 'Braço Primário'
  | 'Braço Secundário'
  | 'Tronco'
  | 'Perna'
  | 'Perna Primária'
  | 'Perna Secundária'

type ValidNumber = number & { __brand: 'ValidNumber' }

function validNumber(n: number): ValidNumber {
  if (n < 1 || n > 100) throw new Error('número inválido')
  return n as ValidNumber
}
