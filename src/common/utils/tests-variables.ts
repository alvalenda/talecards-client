export const testDifficult: TestDifficult[] = [
  { difficult: 'very_easy', modifier: 60 },
  { difficult: 'easy', modifier: 40 },
  { difficult: 'average', modifier: 20 },
  { difficult: 'challenge', modifier: 0 },
  { difficult: 'difficult', modifier: -20 },
  { difficult: 'hard', modifier: -40 },
  { difficult: 'very_hard', modifier: -60 },
]

export const testSuccessOutcomes: TestOutcome[] = [
  { sl: [0, 1], outcome: 'Sucesso Marginal' },
  { sl: [2, 3], outcome: 'Sucesso' },
  { sl: [4, 5], outcome: 'Sucesso Impressionante' },
  { sl: [6], outcome: 'Sucesso Extraordinário' },
]

export const testFailureOutcomes: TestOutcome[] = [
  { sl: [0, -1], outcome: 'Falha Marginal' },
  { sl: [-2, -3], outcome: 'Falha' },
  { sl: [-4, -5], outcome: 'Falha Desastrosa' },
  { sl: [-6], outcome: 'Falha Catastrófica' },
]

export const testDifficultOptions = testDifficult.map((difficult) => ({
  value: difficult.difficult,
  label: difficult.difficult,
}))

export type TestOutcome = {
  sl: number[]
  outcome: string
}

export type TestDifficult = {
  difficult: Difficulties
  modifier: number
}

type Difficulties =
  | 'very_easy'
  | 'easy'
  | 'average'
  | 'challenge'
  | 'difficult'
  | 'hard'
  | 'very_hard'
