import {
  DiceHundredRoll,
  RollCombatTestPayload,
  RollCombatTestResult,
  RollTestPayload,
  RollTestResult,
} from '../../types/dice-roll'
import {
  testFailureOutcomes,
  TestOutcome,
  testSuccessOutcomes,
} from '../test-objects'

export const diceTestHelper = (
  diceRoll: Required<RollTestPayload>
): RollTestResult => {
  let testResult: RollTestResult = {
    ...diceRoll,
    outcome: '',
    sl: 0,
  }

  testResult.target += testResult.modifier + testResult.difficult.modifier
  testResult.sl = (testResult.target - testResult.result) / 10

  testResult = { ...testResult, ...testOutcomeHelper(testResult.sl) }

  setAutoSuccessAndFailure(testResult)
  setDHundredCritical(testResult)

  return testResult
}

export const diceHundredCombatTestHelper = (
  diceRoll: RollCombatTestPayload
): RollCombatTestResult => {
  let combatTest: RollCombatTestResult = {
    ...diceRoll,

    outcome: '',
    sl: 0,
  }

  combatTest.target +=
    combatTest.modifier +
    combatTest.difficult.modifier +
    combatTest.advantage * 10
  combatTest.sl = (combatTest.target - combatTest.result) / 10

  combatTest = { ...combatTest, ...testOutcomeHelper(combatTest.sl) }

  setAutoSuccessAndFailure(combatTest)
  setDHundredCritical(combatTest)

  return combatTest
}

const setAutoSuccessAndFailure = (test: RollTestResult): void => {
  if (test.sl <= 0 && test.result < 6) {
    test.outcome = 'Sucesso Automático'
  }

  if (test.sl >= 0 && test.result > 95) {
    test.outcome = 'Falha Automática'
  }
}

const setDHundredCritical = (test: RollTestResult): void => {
  if (test.dices.tens === test.dices.ones) {
    test.outcome.substring(0, 5) === 'Falha'
      ? (test.outcome += ' Crítica')
      : (test.outcome += ' Crítico')
  }
}

export const diceHundredRoll = (): DiceHundredRoll => {
  const diceRoll: DiceHundredRoll = {
    dices: {
      tens: Math.floor(Math.random() * 10),
      ones: Math.floor(Math.random() * 10),
    },

    result: 0,
  }

  if (diceRoll.dices.tens === 0 && diceRoll.dices.ones === 0) {
    diceRoll.dices.tens = 10
  }

  diceRoll.result = diceRoll.dices.tens * 10 + diceRoll.dices.ones

  return diceRoll
}

export const testOutcomeHelper = (sl: number): TestOutcome => {
  let data: TestOutcome

  const realSl = parseInt(`${sl}`.split('.')[0])

  if (sl >= 0) {
    data = realSl > 6 ? testSuccessOutcomes[6] : testSuccessOutcomes[realSl]
  } else {
    data =
      realSl < -6
        ? testSuccessOutcomes[6]
        : testFailureOutcomes[Math.abs(realSl)]
  }
  data.sl = realSl

  return data
}
