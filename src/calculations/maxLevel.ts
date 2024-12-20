import { CPM_STEPS } from '../IO/data/CPMSteps';

export function calculateMaxLevelForCPLimit(
  speciesStats: { attack: number; defense: number; stamina: number },
  ivs: { attack: number; defense: number; stamina: number },
  minLevel: number,
  cpLimit: number,
): {
  cp: number;
  level: number;
} {
  const result = {
    cp: 0,
    level: 0,
  };

  const MAX_LEVEL = 50;

  if (cpLimit === 10000) {
    result.cp = calculateCP(speciesStats, ivs, MAX_LEVEL);
    result.level = MAX_LEVEL;
    return result;
  }

  const minLevelCP = calculateCP(speciesStats, ivs, minLevel);
  if (minLevelCP > cpLimit) {
    return result;
  }

  const maxLevelCP = calculateCP(speciesStats, ivs, MAX_LEVEL);
  if (maxLevelCP < cpLimit * 0.9) {
    return result;
  }

  let low = minLevel * 2;
  let high = MAX_LEVEL * 2;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midLevel = mid / 2;
    const midCP = calculateCP(speciesStats, ivs, midLevel);
    if (midCP <= cpLimit) {
      result.cp = midCP;
      result.level = midLevel;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

function calculateCP(
  speciesStats: { attack: number; defense: number; stamina: number },
  ivs: { attack: number; defense: number; stamina: number },
  level: number,
): number {
  return Math.floor(
    (Math.sqrt(speciesStats.stamina + ivs.stamina) *
      (speciesStats.attack + ivs.attack) *
      Math.sqrt(speciesStats.defense + ivs.defense) *
      Math.pow(CPM_STEPS[level], 2)) /
      10,
  );
}
