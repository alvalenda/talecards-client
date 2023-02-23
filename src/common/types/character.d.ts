import type { Attribute, Characteristic } from './attributes'
import type { Skill } from './skills'
import type { Talent, Talents } from './talents'
export interface Character {
  id?: string
  name: string
  description: string
  attributes: Attribute[]
}

export interface Player extends Character {
  avatar: string
  skills: Skill[]
  talents: Talent[]
  weapons: Weapon[]
  armors: Armor[]
  trappings: Inventory
  inventory: Inventory
  notes: Notes
  history: History
}

export interface NPC extends Character {}

export interface Monster extends Character {
  attributes: Characteristic[]
  skills?: Skill[]
  talents?: Talent[]
  traits: Trait[]
  optionalTraits?: Trait[]
  specialAbilities?: string[]
  weapons?: Weapon[]
  armors?: Armor[]
}

type Notes = string
type History = string
