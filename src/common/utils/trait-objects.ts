import { Trait } from '../types/traits'

export const traits: Trait[] = [
  {
    name: 'Afraid',
    name_br: 'Medo',
    attack: false,
    types: [['Target', 'Chose One']],
    description: 'The creature gains Fear (0) to the Target.',
  },
  {
    name: 'Amphibious',
    name_br: 'Anfíbio',
    attack: false,
    types: [],
    description:
      'The creature adds its Agility Bonus to the SL of all Swim Tests and move at full Movement through water.',
  },
  {
    name: 'Arboreal',
    name_br: 'Arbóreo',
    attack: false,
    types: [],
    description:
      'The creature adds its Agility Bonus to the SL of all Climb and Stealth Tests.',
  },
  {
    name: 'Animosity',
    name_br: 'Animosidade',
    attack: false,
    types: [['Target', 'Chose One']],
    description: 'The creature dislikes the Target.',
  },
  {
    name: 'Armour',
    name_br: 'Armadura',
    attack: false,
    types: [
      ['Rating', 0],
      ['Including TB', 0],
    ],
    description:
      'The creature has Rating Armour Points on all Hit Locations. The number in brackets after the Rating is the creatures TB + Armour Points. Most damage is reduced by this number.',
  },
  {
    name: 'Belligerent',
    name_br: 'Beligerante',
    attack: false,
    types: [],
    description:
      'If the creature has more Advantage than its opponent, it is Immune to Psychology.',
  },
  {
    name: 'Bestial',
    name_br: 'Bestial',
    attack: false,
    types: [],
    description:
      'The creature fears fire and gains a Broken Condition if struck by it. It defends only with Dodge. If it loses more than half its Wounds, it will attempt to Flee. If protecting young or Territorial it enters Frenzy instead.',
  },
  {
    name: 'Big',
    name_br: 'Grande',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['S', +10],
          ['T', +10],
          ['Ag', -5],
        ],
      ],
    ],
  },
  {
    name: 'Bite',
    name_br: 'Mordida',
    attack: true,
    types: [['Rating', 0]],
    description:
      'The creature may make a Free Attack by spending 1 Advantage, inflicting Rating damage.',
  },
  {
    name: 'Blessed',
    name_br: 'Abençoado',
    attack: false,
    types: [['Various', '']],
    description:
      'The creature is Blessed and can enact Blessings; the relevant deity is indicated in brackets.',
  },
  {
    name: 'Bounce',
    name_br: 'Ressalto',
    attack: false,
    types: [],
    description:
      'When Charging or Running, it doubles its Movement Characteristic and ignores all terrain.',
  },
  {
    name: 'Breath',
    name_br: 'Baforada',
    attack: true,
    types: [
      ['Rating', 0],
      ['Type', ''],
    ],
    description:
      'When Charging or Running, it doubles its Movement Characteristic and ignores all terrain.',
  },
  {
    name: 'Brute',
    name_br: 'Bruto',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['M', -1],
          ['Ag', -10],
          ['S', +10],
          ['T', +10],
        ],
      ],
    ],
    description:
      'The creature is heavy and brutish. It receives –1 Movement, –10 Agility, and +10 Strength and Toughness.',
  },
  {
    name: 'Champion',
    name_br: 'Campeão',
    attack: false,
    types: [],
    description:
      'If the creature wins an Opposed Test when defending in melee it causes Damage as if it were the attacker.',
  },
  {
    name: 'Chill Grasp',
    name_br: 'Toque Gélido',
    attack: true,
    types: [],
    description:
      'Cost: 2 Advantage. Action. Opposed WS vs Melee or Dodge. If it wins, its target loses 1d10 + SL Wounds with no TB or AP reduction. This attack is Magical.',
  },
  {
    name: 'Clever',
    name_br: 'Esperto',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['I', +10],
          ['Int', +20],
        ],
      ],
    ],
    description: 'The creature receives +20 Intelligence and +10 Initiative.',
  },
  {
    name: 'Cold-blooded',
    name_br: 'Sangue Frio',
    attack: false,
    types: [],
    description: 'The creature can reverse all failed Willpower Tests.',
  },
  {
    name: 'Constrictor',
    name_br: 'Constritor',
    attack: true,
    types: [],
    description:
      'Any hit gives the target an Entangled Condition and the creature may Grapple.',
  },
  {
    name: 'Construct',
    name_br: 'Constructo',
    attack: false,
    types: [],
    description:
      "The creature is a construct of magic. It has no I, WP and Fel. If it has no controller and don't have Territorial Trait, it meanders mindlessly. For calculating its Wounds, it uses its SB whenever WB is required. All its attacks are Magical.",
  },
  {
    name: 'Corrosive Blood',
    name_br: 'Sangue Corrosivo',
    attack: true,
    types: [],
    description:
      'When the creature is Wounded all Engaged characters take 1d10 Wounds, reduced by TB and AP, minimum of 1.',
  },
  {
    name: 'Corruption',
    name_br: 'Corrupção',
    attack: false,
    types: [['Intensity', 'Minor']],
    description:
      'The creature is tainted by Chaos. The Strength of the Corruption is marked in brackets.',
  },
  {
    name: 'Cunning',
    name_br: 'Astuto',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['I', +10],
          ['Int', +10],
          ['Fel', +10],
        ],
      ],
    ],
    description:
      'The creature receives +10 Fellowship, Intelligence, and Initiative.',
  },
  {
    name: 'Dark Vision',
    name_br: 'Visão Escura',
    attack: false,
    types: [],
    description: 'The creature can see in the dark as daylight.',
  },
  {
    name: 'Daemonic',
    name_br: 'Demoníaco',
    attack: false,
    types: [['Target', '']],
    description:
      'Does not require air, food, or water. All attacks are Magical. Roll 1d10 after any blow is received; if equal or higher than Target number, the blow is ignored, even if it is a critical. On zero wounds, the creature disappears.',
  },
  {
    name: 'Die Hard',
    name_br: 'Duro de Matar',
    attack: false,
    types: [],
    description:
      'If death occurs and all parts are in place, creature may attempt a Challenging (+0) Endurance Test requiring an 6 SL at the start of every round for TB Rounds. If successful, the creature revives with 1 Wound.',
  },
  {
    name: 'Disease',
    name_br: 'Doença',
    attack: false,
    types: [['Type', '']],
    description:
      'The creature carries a disease, and others will have to Test as appropriate for Contraction.',
  },
  {
    name: 'Distracting',
    name_br: 'Distrair',
    attack: false,
    types: [],
    description:
      'All living targets within TB yards suffer a penalty of –20 to Tests. Does not stack with other Distracting traits.',
  },
  {
    name: 'Elite',
    name_br: 'Elite',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['WS', +20],
          ['BS', +20],
          ['WP', +20],
        ],
      ],
    ],
    description:
      'The creature receives +20 to Weapon Skill, Ballistic Skill, and Willpower.',
  },
  {
    name: 'Ethereal',
    name_br: 'Etéreo',
    attack: false,
    types: [],
    description:
      "The creature's form is insubstantial, may pass through solid objects, and can only be harmed by Magical attacks.",
  },
  {
    name: 'Fast',
    name_br: 'Rápido',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['M', +1],
          ['Ag', +10],
        ],
      ],
    ],
    description: 'The creature receives +1 Movement and +10 Agility.',
  },
  {
    name: 'Fear',
    name_br: 'Medo',
    attack: false,
    types: [['Rating', 0]],
    description:
      'The creature causes supernatural Fear in other creatures, with a rating equal to its Rating.',
  },
  {
    name: 'Flight',
    name_br: 'Voo',
    attack: false,
    types: [['Rating', 0]],
    description:
      'Can fly as a Move up to Rating yards. It may use fly to Charge. If it starts its turn flying and is unable to still flying, the GM decides how far the creature falls. When targeting it increase range by 1 step. When flying the creature takes –20 to all ranged combat.',
  },
  {
    name: 'Frenzy',
    name_br: 'Fúria',
    attack: false,
    types: [],
    description: 'The creature can Frenzy. See page 190.',
  },
  {
    name: 'Fury',
    name_br: 'Fúria',
    attack: false,
    types: [],
    description:
      'Cost: 1 Advantage; Become subject to Hatred to close combat opponents. Cost: 3 Advantage; Become subject to Frenzy, and lose all Advantage.',
  },
  {
    name: 'Ghostly Howl',
    name_br: 'Uivo Fantasmagórico',
    attack: true,
    types: [],
    description:
      'Cost: All Advantage, min 2. The creature howls as Free Attack. Living targets within Initiative yards gain Deafened 3 Condition and suffer 1d10 Wounds ignoring TB and AP, and must pass an Average (+20) Endurance Test or gain Broken 1.',
  },
  {
    name: 'Grim',
    name_br: 'Sinistro',
    attack: false,
    types: [['Rating', 0]],
    description:
      "At the beginning of the creature's turn if it has less than Rating Advantage, and it is not Surprised or Entangled, its Advantage increases to Rating.",
  },
  {
    name: 'Hardy',
    name_br: 'Durão',
    attack: false,
    types: [],
    description:
      'Increase Wounds by a number equal to its TB, applied before any Size modifiers.',
  },
  {
    name: 'Hatred',
    name_br: 'Ódio',
    attack: false,
    types: [['Target', '']],
    description: 'The creature really hates the Target. See page 190.',
  },
  {
    name: 'Horns',
    name_br: 'Chifres',
    attack: true,
    types: [
      ['Rating', 0],
      ['Feature', ''],
    ],
    description:
      'When the creature gains an Advantage for Charging, it may make a Free Attack with its Horns, performed as normal, using Rating to calculate Damage.',
  },
  {
    name: 'Hungry',
    name_br: 'Faminto',
    attack: false,
    types: [],
    description:
      'Must pass Average (+20) Willpower Test or eat a fresh or incapacitated body, losing next Move and Action.',
  },
  {
    name: 'Immunity',
    name_br: 'Imunidade',
    attack: false,
    types: [['Type', '']],
    description:
      'All Damage of this type, including from a Critical Wound, is ignored.',
  },
  {
    name: 'Immunity to Psychology',
    name_br: 'Imunidade à Psicologia',
    attack: false,
    types: [],
    description:
      'The creature is utterly fearless. It ignores the Psychology rules.',
  },
  {
    name: 'Infected',
    name_br: 'Infectado',
    attack: false,
    types: [],
    description:
      'If the creature causes Wounds to a living opponent, it must pass an Easy (+40) Endurance Test or contract Festering Wound (page 187).',
  },
  {
    name: 'Infestation',
    name_br: 'Infestação',
    attack: false,
    types: [],
    description:
      'The presence of an unusually large number of insects or animals makes All opponents suffer a -10 penalty to hit in melee combat.',
  },
  {
    name: 'Leader',
    name_br: 'Líder',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['Fel', +10],
          ['WP', +10],
        ],
      ],
    ],
    description: 'The creature receives +10 to Fellowship and Willpower.',
  },
  {
    name: 'Magical',
    name_br: 'Mágico',
    attack: false,
    types: [],
    description: "The creature's attacks count as Magical.",
  },
  {
    name: 'Magic Resistance',
    name_br: 'Resistência à Magia',
    attack: false,
    types: [['Rating', 0]],
    description:
      'The SL of any spell affecting the creature is reduced by Rating.',
  },
  {
    name: 'Miracles',
    name_br: 'Milagres',
    attack: false,
    types: [['Various', '']],
    description:
      'The creature can enact Miracles; the relevant deity is indicated in brackets.',
  },
  {
    name: 'Night Vision',
    name_br: 'Visão Noturna',
    attack: false,
    types: [],
    description: 'Roll on the Physical Corruption Table (p. 184).',
  },
  {
    name: 'Painless',
    name_br: 'Indolor',
    attack: false,
    types: [],
    description:
      'All non-amputation penalties from Critical Wounds are ignored, although Conditions are suffered as normal.',
  },
  {
    name: 'Petrifying Gaze',
    name_br: 'Olhar Petrificante',
    attack: true,
    types: [['Rating', 0]],
    description:
      'Cost: All Advantage, min 1. As an action perform an Opposed BS vs Initiative Test or BS vs Language (Magick) Test, adding 1 SL per Advantage spent. Inflicts Stunned 1 per 2 SL. If it wins by 6+ SL, its target is turned to stone.',
  },
  {
    name: 'Prejudice',
    name_br: 'Preconceito',
    attack: false,
    types: [['Target', '']],
    description: "The creature just doesn't like the Target. (p. 190)",
  },
  {
    name: 'Ranged',
    name_br: 'À Distância',
    attack: true,
    types: [['Rating', 0]],
    description:
      'The creature has a ranged weapon. The weapon does Damage equal to the Rating.',
  },
  {
    name: 'Rear',
    name_br: 'Coice',
    attack: true,
    types: [['Rating', 0]],
    description:
      'For its Move, the creature may make a Stomp attack if it is larger than its opponent. Damage is SB+0.',
  },
  {
    name: 'Regenerate',
    name_br: 'Regenerar',
    attack: false,
    types: [['Rating', 0]],
    description:
      'At the start of round, regenerate 1d10 Wounds unless you have 0 Wounds remaining. In this case, roll a d10, if the result is 8+ regenerate 1 Wound. Rolling a 10 fully regenerates a Critical Wound. Any Wounds caused by Fire do not regenerate.',
  },
  {
    name: 'Skittish',
    name_br: 'Arisco',
    attack: false,
    types: [],
    description:
      'The creature is easily scared by magic or loud noises. If such occurs, it receives Broken 3 Condition.',
  },
  {
    name: 'Spellcaster',
    name_br: 'Feiticeiro',
    attack: false,
    types: [['Various', '']],
    description:
      'The creature can cast spells; the specific Lore of Magic will be indicated in brackets.',
  },
  {
    name: 'Stealthy',
    name_br: 'Furtivo',
    attack: false,
    types: [],
    description:
      'The creature adds a number equal to its Agility Bonus to the SL of all Stealth Tests.',
  },
  {
    name: 'Size',
    name_br: 'Tamanho',
    attack: false,
    types: [['Size', 'Average']],
    description:
      'If 1 Size larger, attacks are Damaging, and successful attacks activate Deathblow. The attacker causes Fear, and wins Opposed Strength Roll unless smaller creature gets a Critical. If 2+ Sizes larger, as above and attacks gain Impact. Multiply Damage by size difference. Causes Terror equal to Size difference. Automatically wins any Opposed Strength Roll. Cost: 1 Advantage. Larger creatures may Stomp smaller creatures. Damage is SB+0. If is smaller, they gain a bonus of +10 to hit. Size effects the number of Wounds a creature has. (p 341)',
  },
  {
    name: 'Stride',
    name_br: 'Passo Largo',
    attack: false,
    types: [],
    description: 'Multiply Run Movement by 1.5 when Running.',
  },
  {
    name: 'Stupid',
    name_br: 'Estúpido',
    attack: false,
    types: [],
    description:
      'If creature is near allies without Stupid, ignore this trait. Otherwise, it must pass an Easy (+40) Intelligence Test at the start of each round. If it fails, it loses both its Move and Action for that Turn.',
  },
  {
    name: 'Swamp-strider',
    name_br: 'Pantaneiro',
    attack: false,
    types: [],
    description:
      'The creature suffers no Movement penalties for moving through boggy ground.',
  },
  {
    name: 'Swarm',
    name_br: 'Enxame',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['WS', +10],
          ['W', 'x5'],
        ],
      ],
    ],
    description:
      'O Enxame conta como uma única Criatura. Ele ignora as regras de Psicologia e Engajamento. Ataques bem-sucedidos ativam Golpe Mortal. Todos os oponentes Engajados sofrem 1 Ferimento ao final de cada Rodada. O Enxame tem 5x os Ferimentos de uma criatura normal e +10 WS. Ataques à distância contra ele ganham +40 para acertar. Ignore todas as regras do Traço Tamanho.',
  },
  {
    name: 'Tail Attack',
    name_br: 'Caudada',
    attack: true,
    types: [['Rating', 0]],
    description:
      'Custo: 1 Vantagem. Ataque com a Cauda como um Ataque Livre, causa Rating de Dano. Oponentes menores que sofrerem pelo menos 1 Ferimento também ganham a Condição Derrubado.',
  },
  {
    name: 'Tentacles',
    name_br: 'Tentáculos',
    attack: true,
    types: [
      ['Number', 0],
      ['Rating', 0],
    ],
    description:
      "The creature has # tentacles. It gains one Free Attack Action per tentacle, which does Rating damage. If it Wounds an opponent, it inflicts an Entangled Condition and that tentacle Grapples the target. If a tentacle is Grappling, use the tentacle's Free Attack Action to resolve that Grapple (p 338)",
  },
  {
    name: 'Territorial',
    name_br: 'Territorial',
    attack: false,
    types: [],
    description:
      'This creature will fight to the death to protect its territory, and will not pursue enemies if they flee this area.',
  },
  {
    name: 'Terror',
    name_br: 'Abençoado',
    attack: false,
    types: [['Rating', 0]],
    description:
      'The creature causes Terror. Targets must pass a Cool Test or gain Broken Condition. (p 191)',
  },
  {
    name: 'Trained',
    name_br: 'Treinado',
    attack: false,
    types: [['Various', '']],
    description:
      'Train a animal in one of the follow abilities: Broken, Drive, Entertain, Fetch, Guard, Home, Magic, Mount or War.',
  },
  {
    name: 'Tongue Attack',
    name_br: 'Linguada',
    attack: true,
    types: [
      ['Rating', 0],
      ['Range', 0],
    ],
    description:
      'Cost: 1 Advantage. Make a Free ranged Attack. Inflicts Rating Damage. If hit, target receives 1 Entangled Condition. If smaller, it is dragged to the creature and becomes Engaged. The creature may then either release the target, perform a Free Attack using its Weapon Trait, or initiate a Grapple (p 163).',
  },
  {
    name: 'Tough',
    name_br: 'Tenaz',
    attack: false,
    types: [
      [
        'TRANSFORM',
        [
          ['T', +10],
          ['WP', +10],
        ],
      ],
    ],
    description: 'The creature receives +10 Toughness and Willpower.',
  },
  {
    name: 'Tracker',
    name_br: 'Rastreador',
    attack: false,
    types: [],
    description: 'The creature adds SL equal to their IB to all Track Tests.',
  },
]

// ! Página 136 - Bestiário
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
