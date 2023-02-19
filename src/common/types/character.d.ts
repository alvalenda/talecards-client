export interface Character {
  id?: string
  name: string
  avatar: string
  description: string
  attributes: Attributes
}

export interface Player extends Character {
  skills: Skills
  talents: Talents
  weapons: Weapons
  armors: Armors
  trappings: Inventory
  inventory: Inventory
  notes: Notes
  history: History
}

export interface NPC extends Character {}

export interface Monster extends Character {
  skills?: Skills
  talents?: Talents
  traits: Traits
  optionalTraits?: OptionalTraits
  specialAbilities?: SpecialAbility[]
  weapons?: Weapons
  armors?: Armors
  description: string
}

export type Attributes = {
  [key in Attribute]: AttributeValue
}

export type AttributeValue = {
  baseValue: number
  advances: number
  total: number
}

export type Characteristic =
  | 'WS'
  | 'BS'
  | 'S'
  | 'T'
  | 'I'
  | 'Ag'
  | 'Dex'
  | 'Int'
  | 'WP'
  | 'Fel'

export type Attribute =
  | Characteristic
  | 'Ferimentos'
  | 'Destino'
  | 'Sorte'
  | 'Resiliência'
  | 'Determinação'
  | 'Motivação'
  | 'Movimento'

export type Skills = {
  [key in Skill]: SkillValue
}

export type SkillValue = {
  keyAtribute: Attribute
  advances: number
  total: number
  specializations?: string[]
}

export type Skill =
  | 'Armas À Distância'
  | 'Armas Brancas'
  | 'Abrir Fechaduras'
  | 'Apostar'
  | 'Armar Armadilhas'
  | 'Arte'
  | 'Atletismo'
  | 'Avaliar'
  | 'Canalizar'
  | 'Charme'
  | 'Comércio'
  | 'Conhecimento'
  | 'Consumir Álcool'
  | 'Curar'
  | 'Encantar Animais'
  | 'Entreter'
  | 'Escalar'
  | 'Esquivar'
  | 'Fofocar'
  | 'Frieza'
  | 'Furtividade'
  | 'Intimidar'
  | 'Intuição'
  | 'Lidar com Animais'
  | 'Liderança'
  | 'Linguagem'
  | 'Montaria'
  | 'Nadar'
  | 'Navegar'
  | 'Pechinchar'
  | 'Percepção'
  | 'Performar'
  | 'Pesquisa'
  | 'Prestidigitação'
  | 'Pilotar'
  | 'Rastrear'
  | 'Remar'
  | 'Resistência'
  | 'Rezar'
  | 'Sinais Secretos'
  | 'Sobrevivência'
  | 'Subornar'
  | 'Tocar'
  | 'Treinar Animais'
  | 'Velejar'

export type Talents = {
  [key in Talent]: TalentValue
}

export type TalentValue = {
  name: string
  max: number
  tests?: string[]
  description: string
}

export type Talent = 'Aparência' | 'Conhecimento' | 'Conhecimento Mágico'
