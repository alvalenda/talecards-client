export type DiceRoll = {
  dice: number
  modifier: number
  result: number
  type: string

  roll: () => void
  getResult: () => number
}

export interface DiceHundredRoll {
  dices: { tens: number; ones: number }
  result: number
}

export interface RollTestResult extends DiceHundredRoll {
  modifier: Modifier
  outcome: string
  sl: number
  target: number
}

export interface RollTestPayload extends DiceHundredRoll {
  target?: number
}

export type Modifier =
  | -60
  | -50
  | -40
  | -30
  | -20
  | -10
  | 0
  | 10
  | 20
  | 30
  | 40
  | 50
  | 60
