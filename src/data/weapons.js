export const WEAPONS = {
  slingshot: { id: 'slingshot', name: 'Slingshot', price: 0,   damage: 10,  cooldown: 0.5, kind: 'hitscan' },
  pistol:    { id: 'pistol',    name: 'Pistol',    price: 40,  damage: 20,  cooldown: 0.3, kind: 'hitscan' },
  shotgun:   { id: 'shotgun',   name: 'Shotgun',   price: 150, damage: 12,  cooldown: 0.9, kind: 'spread', pellets: 6 },
  dynamite:  { id: 'dynamite',  name: 'Dynamite',  price: 120, damage: 120, cooldown: 1.5, kind: 'thrown', radius: 4 },
};
