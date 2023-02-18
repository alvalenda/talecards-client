export type DiceRoll = {
  dice: number
  modifier: number
  result: number
  type: string
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
  | -100
  | -90
  | -80
  | -70
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
  | 70
  | 80
  | 90
  | 100

export type Advantage = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
