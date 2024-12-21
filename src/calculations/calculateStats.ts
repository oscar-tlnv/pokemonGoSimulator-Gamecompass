import { CPM_STEPS } from '../IO/data/CPMSteps';

export function calculateStats(
  speciesStats: {
    attack: number;
    defense: number;
    stamina: number;
  },
  level: number,
  ivs: {
    attack: number;
    defense: number;
    stamina: number;
  },
): { attack: number; defense: number; stamina: number } {
  const cpm = CPM_STEPS[level];

  const attackValue: number = Number(
    ((speciesStats.attack + ivs.attack) * cpm).toFixed(2),
  );
  const defenseValue: number = Number(
    ((speciesStats.defense + ivs.defense) * cpm).toFixed(2),
  );
  const staminaValue: number = Math.floor(
    (speciesStats.stamina + ivs.stamina) * cpm,
  );

  return {
    attack: attackValue,
    defense: defenseValue,
    stamina: staminaValue,
  };
}

export function calculateWeightedStatProduct(
  stats: { attack: number; defense: number; stamina: number },
  weights: {
    attack: number;
    defense: number;
    stamina: number;
  },
): number {
  const statProduct: number = Number(
    (
      (Math.pow(stats.attack, weights.attack) *
        Math.pow(stats.defense, weights.defense) *
        Math.pow(stats.stamina, weights.stamina)) /
      1000
    ).toFixed(2),
  );

  return statProduct;
}
