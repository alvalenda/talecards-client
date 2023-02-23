import { CharacteristicShort } from './characteristics'

export type Trait = {
  name: TraitName
  name_br: TraitNameBR
  difficulty?: number
  feature?: string
  number?: number
  range?: string
  rating?: number
  type?: string
  characteristics_mod?: {
    short: CharacteristicShort | 'M' | 'W'
    value: number
  }[]
  description: string

  get getTrait(): string
}
// string options of traits names
type TraitName =
  | 'Afraid'
  | 'Amphibious'
  | 'Arboreal'
  | 'Animosity'
  | 'Armour'
  | 'Belligerent'
  | 'Bestial'
  | 'Big'
  | 'Bite'
  | 'Blessed'
  | 'Bounce'
  | 'Breath'
  | 'Brute'
  | 'Champion'
  | 'Chill Grasp'
  | 'Clever'
  | 'Cold-Blooded'
  | 'Constrictor'
  | 'Construct'
  | 'Corrosive Blood'
  | 'Corruption'
  | 'Cunning'
  | 'Dark Vision'
  | 'Daemonic'
  | 'Die Hard'
  | 'Disease'
  | 'Distracting'
  | 'Elite'
  | 'Ethereal'
  | 'Fast'
  | 'Fear'
  | 'Flight'
  | 'Frenzy'
  | 'Fury'
  | 'Ghostly Howl'
  | 'Grim'
  | 'Hardy'
  | 'Hatred'
  | 'Horns'
  | 'Hungry'
  | 'Immunity'
  | 'Immunity to Psychology'
  | 'Infected'
  | 'Infestation'
  | 'Leader'
  | 'Magical'
  | 'Miracles'
  | 'Night Vision'
  | 'Painless'
  | 'Petrifying Gaze'
  | 'Prejudice'
  | 'Ranged'
  | 'Rear'
  | 'Regenerate'
  | 'Skittish'
  | 'Spellcaster'
  | 'Stealthy'
  | 'Size'
  | 'Stride'
  | 'Stupid'
  | 'Swamp-strider'
  | 'Swarm'
  | 'Tail Attack'
  | 'Tentacles'
  | 'Territorial'
  | 'Terror'
  | 'Trained'
  | 'Tongue Attack'
  | 'Tough'
  | 'Tracker'
  | 'Undead'
  | 'Unstable'
  | 'Vampiric'
  | 'Venom'
  | 'Vomit'
  | 'Ward'
  | 'WallCrawler'
  | 'Weapon'
  | 'Web'

// string type options of traits names in portuguese br
type TraitNameBR =
  | 'Amedrontado'
  | 'Amphibious'
  | 'Arbóreo'
  | 'Animosidade'
  | 'Armadura'
  | 'Beligerante'
  | 'Bestial'
  | 'Grande'

/* Traits
Afraid (Target)
Amphibious
Arboreal
Animosity (Target)
Armour (Rating)(Including TB)
Belligerent
Bestial
Big
Bite (Rating)
Blessed (Various)
Bounce
Breath (Rating)(Type)
Brute
Champion
Chill Grasp
Clever
Cold-blooded
Constrictor
Construct
Corrosive Blood
Corruption
Cunning
Dark Vision
Daemonic (Target)
Die Hard
Disease (Type)
Distracting
Elite
Ethereal
Fast
Fear (Rating)
Flight (Rating)
Frenzy
Fury
Ghostly Howl
Grim (Rating)
Hardy
Hatred (Target)
Horns (Rating)(Feature)
Hungry
Immunity (Type)
Immunity to
Psychology
Infected
Infestation
Leader
Magical
Miracles (various)
Night Vision
Painless
Petrifying Gaze
Prejudice (Target)
Ranged (Rating)
Rear
Regenerate
Skittish
Spellcaster
Stealthy
Size
Stride
Stupid
Swamp-strider
Swarm
Tail Attack (Rating)
# Tentacles (Rating)
Territorial
Terror (Rating)
Trained
Tongue Attack (Rating)(Range)
Tough
Tracker
Undead
Unstable
Vampiric
Venom (Difficulty)
Vomit
Ward (Rating)
Wallcrawler
Weapon (Rating)
Web (Rating)
                        */
