import { CharacteristicShort } from './characteristics'

export type Trait = {
  name: TraitName
  name_br: TraitNameBR
  attack: boolean
  types?: TraitType[]
  description?: string
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
  | 'Cold-blooded'
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
  | 'Medo'
  | 'Anfíbio'
  | 'Arbóreo'
  | 'Animosidade'
  | 'Armadura'
  | 'Beligerante'
  | 'Bestial'
  | 'Grande'
  | 'Mordida'
  | 'Abençoado'
  | 'Ressalto'
  | 'Baforada'
  | 'Bruto'
  | 'Campeão'
  | 'Toque Gélido'
  | 'Esperto'
  | 'Sangue Frio'
  | 'Constritor'
  | 'Constructo'
  | 'Sangue Corrosivo'
  | 'Corrupção'
  | 'Astuto'
  | 'Visão Escura'
  | 'Demoníaco'
  | 'Duro de Matar'
  | 'Doença'
  | 'Distrair'
  | 'Elite'
  | 'Etéreo'
  | 'Rápido'
  | 'Medo'
  | 'Voo'
  | 'Frenesi'
  | 'Fúria'
  | 'Uivo Fantasmagórico'
  | 'Sinistro'
  | 'Durão'
  | 'Ódio'
  | 'Chifres'
  | 'Faminto'
  | 'Imunidade'
  | 'Imunidade à Psicologia'
  | 'Infectado'
  | 'Infestação'
  | 'Líder'
  | 'Mágico'
  | 'Milagres'
  | 'Visão Noturna'
  | 'Indolor'
  | 'Olhar Petrificante'
  | 'Preconceito'
  | 'À Distância'
  | 'Coice'
  | 'Regenerar'
  | 'Arisco'
  | 'Feiticeiro'
  | 'Furtivo'
  | 'Tamanho'
  | 'Passo Largo'
  | 'Estúpido'
  | 'Andar Pântano'
  | 'Enxame'
  | 'Ataque Cauda'
  | 'Tentáculos'
  | 'Territorial'
  | 'Terror'
  | 'Treinado'
  | 'Ataque Língua'
  | 'Tenaz'
  | 'Pistoleiro'
  | 'Morto-Vivo'
  | 'Instável'
  | 'Vampírico'
  | 'Venenoso'
  | 'Vômito'
  | 'Protegido'
  | 'Escalador'
  | 'Arma'
  | 'Teia'

type TraitType =
  | ['Feature', string]
  | ['Rating', number]
  | ['Target', string]
  | ['Type', string]
  | ['Various', string]
  | ['Including TB', number]
  | ['Number', number]
  | ['Intensity', 'Minor' | 'Major']
  | ['TRANSFORM', TransformModifier]

type TransformModifier = [CharacteristicShort | 'M' | 'W', number][]

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
Wall crawler
Weapon (Rating)
Web (Rating)
                        */
