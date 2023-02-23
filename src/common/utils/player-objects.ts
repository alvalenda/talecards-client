import { Player } from '../types/character'
import { attributesBlank } from './attributes-objects'

export const playerBlank: Player = {
  id: '0',
  name: '',
  description: '',
  attributes: attributesBlank,
  avatar: '',
  skills: [],
  talents: [],
  weapons: [],
  armors: [],
  trappings: [],
  inventory: [],
  notes: '',
  history: '',
}

export const playerSample: Player = {
  id: '0',
  name: 'Player Sample',
  description: 'Um personagem que vive na floresta',
  attributes: attributesBlank,
  avatar: '',
  skills: [
    {
      name: 'Animal Care',
      name_br: 'Lidar com Animais',
      keyAttribute: 'Intelligence',
      advances: 0,
      specialization: '',
    },
  ],
  talents: [],
  weapons: [],
  armors: [],
  trappings: [],
  inventory: [],
  notes: '',
  history: '',
}
