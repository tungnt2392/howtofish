# 🎣 How to Fish — web fan tribute (Three.js)

A polished low-poly, juice-heavy browser take on the *How to Fish* loop: **fish → shoot → sell → upgrade**, on the Lighthouse island.
Unofficial fan-made tribute; no original assets are used — every mesh, shader and sound is generated in code.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm test         # unit tests (economy, fishing model, combat, slots, boss, save/load)
npm run smoke    # end-to-end session in headless Edge (needs the dev server running)
npm run build    # production bundle in dist/
```

## Controls
| Action | Input |
|---|---|
| Move | `WASD` / arrows |
| Cast | **Hold** left mouse (charge), release to throw — aim with the mouse at the water |
| Hook | Click the moment the bobber dips and `!` pops |
| Reel | **Hold** left mouse / `Space`; release before the tension bar reaches red or the line snaps |
| Shoot | Right mouse / `F` — aim at the catch. Air shots (+1), chains (+0.5 each) and a **360° mouse swirl** before the shot (×5) multiply the payout |
| Weapons | `1`-`4`, `Q` cycles |
| Interact | `E` at the Fish Market, Beach Grill, Lucky Slots (and the dock end when you own chum) |
| Mute / Menu | `M` / `Esc` |

## The loop
1. Buy a **Basic Rod** ($3) and **Ham** at the market. 2. Walk to the dock, cast, hook, reel. 3. Shoot the catch before it flops away.
4. Grill it for ×1.5 (miss the window and it burns to ×0.25), sell it, upgrade rods/bait/weapons.
5. Gamble at the slots — three 🎣 wins the **Golden Rod**. 6. Buy **Suspicious Chum** ($250), throw it off the dock, hook the **Colossal Spider Crab**, and shoot it while stunned.

## Structure
`src/core` events · tween · store/save · loop · input — `src/data` creatures, baits, rods, weapons, boss — `src/systems` pure, unit-tested game logic —
`src/world` renderer · lights · water · island · props — `src/entities` player, creatures, boss, bobber, line — `src/game` controllers —
`src/fx` particles · floating text · hit-stop · camera · **juice.js** (the only event→feedback mapping) — `src/ui` HUD/shop/toasts — `src/audio` synthesized SFX + music.

Design spec and implementation plan: `docs/superpowers/`.
