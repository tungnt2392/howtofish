export const RARITY_WEIGHT = { common: 60, uncommon: 25, rare: 10, epic: 4, legendary: 1 };
export const RARITY_RANK = { common: 0, uncommon: 1, rare: 2, epic: 3, legendary: 4 };
export const RARITY_COLOR = { common: '#ffffff', uncommon: '#7CFC7C', rare: '#4db8ff', epic: '#c86bff', legendary: '#ffc933' };
export const CREATURES = [
  { id: 'sardine',    name: 'Sardine',         rarity: 'common',    baseValue: 4,    hp: 10,  minTier: 1, fight: 0.15, radius: 0.5,  color: 0x9fc9e8 },
  { id: 'mackerel',   name: 'Mackerel',        rarity: 'common',    baseValue: 6,    hp: 15,  minTier: 1, fight: 0.20, radius: 0.55, color: 0x5aa0c8 },
  { id: 'shrimp',     name: 'Shrimp',          rarity: 'common',    baseValue: 8,    hp: 8,   minTier: 1, fight: 0.10, radius: 0.4,  color: 0xff9a7a },
  { id: 'crab',       name: 'Crab',            rarity: 'uncommon',  baseValue: 15,   hp: 30,  minTier: 1, fight: 0.30, radius: 0.6,  color: 0xe8553c },
  { id: 'flyingFish', name: 'Flying Fish',     rarity: 'uncommon',  baseValue: 25,   hp: 20,  minTier: 2, fight: 0.30, radius: 0.6,  color: 0x3fd0d0 },
  { id: 'lobster',    name: 'Lobster',         rarity: 'uncommon',  baseValue: 30,   hp: 40,  minTier: 2, fight: 0.35, radius: 0.7,  color: 0xc4301f },
  { id: 'seahorse',   name: 'Seahorse',        rarity: 'rare',      baseValue: 60,   hp: 25,  minTier: 2, fight: 0.30, radius: 0.5,  color: 0xffc94a },
  { id: 'urchin',     name: 'Sea Urchin',      rarity: 'rare',      baseValue: 75,   hp: 50,  minTier: 3, fight: 0.35, radius: 0.6,  color: 0x6a3fa0 },
  { id: 'voxelFish',  name: 'Voxel Fish',      rarity: 'rare',      baseValue: 90,   hp: 40,  minTier: 3, fight: 0.40, radius: 0.7,  color: 0x6be36b },
  { id: 'dripFish',   name: 'Drip Fish',       rarity: 'epic',      baseValue: 220,  hp: 60,  minTier: 3, fight: 0.50, radius: 0.8,  color: 0xff4fa3 },
  { id: 'superdwarf', name: 'Superdwarf Fish', rarity: 'epic',      baseValue: 350,  hp: 80,  minTier: 4, fight: 0.55, radius: 0.8,  color: 0xff8a1f },
  { id: 'goldenKoi',  name: 'Golden Koi',      rarity: 'legendary', baseValue: 1000, hp: 150, minTier: 4, fight: 0.70, radius: 1.0,  color: 0xffd23c },
];
export const creatureById = id => CREATURES.find(c => c.id === id);
