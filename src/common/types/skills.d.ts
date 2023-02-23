import { Characteristic } from './attributes'

export type Skill = {
  name: SkillName | string
  name_br: SkillName | string
  keyAttribute: Omit<Characteristic, 'Movement' | 'Wounds'>
  advances: number
  specialization?: string
}

export type SkillName =
  | 'Animal Care'
  | 'Animal Training'
  | 'Athletics'
  | 'Art'
  | 'Bribery'
  | 'Channelling'
  | 'Charm'
  | 'Charm Animal'
  | 'Climb'
  | 'Consume Alcohol'
  | 'Cool'
  | 'Dodge'
  | 'Drive'
  | 'Endurance'
  | 'Entertain'
  | 'Evaluate'
  | 'Gamble'
  | 'Gossip'
  | 'Heal'
  | 'Haggle'
  | 'Intimidate'
  | 'Intuition'
  | 'Language'
  | 'Leadership'
  | 'Lore'
  | 'Melee'
  | 'Navigation'
  | 'Outdoor Survival'
  | 'Perception'
  | 'Perform'
  | 'Pick Lock'
  | 'Play'
  | 'Pray'
  | 'Ranged'
  | 'Research'
  | 'Ride'
  | 'Row'
  | 'Secret Signs'
  | 'Set Trap'
  | 'Sleight of Hand'
  | 'Stealth'
  | 'Swim'
  | 'Track'
  | 'Trade'
  | 'Sail'
  | 'Survival'

export type SkillNameBr =
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
