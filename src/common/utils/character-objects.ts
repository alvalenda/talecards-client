import { Character } from '../types/character'
import { attributesBlank } from './attributes-objects'

export const characterBlank: Character = {
  id: '0',
  name: '',
  description: '',
  attributes: attributesBlank,
}

export const characterSample: Character = {
  id: '0',
  name: 'Character Sample',
  description: 'Um personagem que vive na floresta',
  attributes: attributesBlank,
}
