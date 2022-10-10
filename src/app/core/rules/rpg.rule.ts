// Player's Handbook(5e) (2014), p.17:
export type RPGRace =
  | 'dragonborn'
  | 'dwarf'
  | 'elf'
  | 'gnome'
  | 'half-elf'
  | 'half-orc'
  | 'halfling'
  | 'human'
  | 'tiefling';

// Player's Handbook(5e) (2014), p.45:
export type RPGClass =
  | 'artificer'
  | 'barbarian'
  | 'bard'
  | 'cleric'
  | 'druid'
  | 'fighter'
  | 'mage'
  | 'monk'
  | 'paladin'
  | 'rogue'
  | 'ranger'
  | 'sorcerer'
  | 'warlock';

// Player's Handbook(5e) (2014), p.196:
export type RPGPhysicalDamage = 'bludgeoning' | 'piercing' | 'slashing';

export type RPGMagicalDamage =
  | 'acid'
  | 'cold'
  | 'fire'
  | 'force'
  | 'lightning'
  | 'necrotic'
  | 'poison'
  | 'psychic'
  | 'radiant'
  | 'thunder';

export type RPGMagicCondition =
  | 'blinded'
  | 'charmed'
  | 'deafened'
  | 'exhaustion'
  | 'frightened'
  | 'grappled'
  | 'incapacitated'
  | 'invisible'
  | 'paralyzed'
  | 'petrified'
  | 'poisoned'
  | 'prone'
  | 'restrained'
  | 'stunned'
  | 'unconscious';

export type RPGDamageType = RPGPhysicalDamage | RPGMagicalDamage;
