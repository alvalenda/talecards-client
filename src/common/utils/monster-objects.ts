import { Monster } from '../types/character'
import { characteristicsSample } from './attributes-objects'

export const MonsterSampleSheet: Monster = {
  id: '0',
  name: 'Monster Sample',
  description: 'Um monstro que vive na floresta',
  attributes: [...characteristicsSample],
  traits: [],
  skills: [],
  talents: [],
}
