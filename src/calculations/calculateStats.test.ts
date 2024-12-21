import { describe, expect, it } from '@jest/globals';
import { calculateStats, calculateWeightedStatProduct } from './calculateStats';

describe('calculateStats', () => {
  it('Calculating the stats for Swampert in the Ultra League', () => {
    const speciesStats = {
      attack: 208,
      defense: 175,
      stamina: 225,
    };
    const level = 33.5;
    const ivs = {
      attack: 0,
      defense: 14,
      stamina: 13,
    };

    const stats = calculateStats(speciesStats, level, ivs);

    expect(stats.attack).toBe(156.57);
    expect(stats.defense).toBe(142.27);
    expect(stats.stamina).toBe(179);
  });
});

describe('calculateWeightedStatProduct', () => {
  it('Calculating the normal stat product for Swampert in the Ultra League', () => {
    const stats = {
      attack: 156.57,
      defense: 142.27,
      stamina: 179,
    };
    const weights = {
      attack: 1,
      defense: 1,
      stamina: 1,
    };

    const weightedStatProduct = calculateWeightedStatProduct(stats, weights);

    expect(weightedStatProduct).toBe(3987.26);
  });

  it('If we increase the weight of the defense stat, a Swampert with a higher defense IV will have a higher stat product', () => {
    const stats0_14_13 = {
      attack: 156.57,
      defense: 142.27,
      stamina: 179,
    };
    const stats0_15_12 = {
      attack: 156.57,
      defense: 143.02,
      stamina: 178,
    };
    const weights = {
      attack: 1,
      defense: 1.05,
      stamina: 0.95,
    };

    const statProduct0_14_13 = calculateWeightedStatProduct(
      stats0_14_13,
      weights,
    );
    const statProduct0_15_12 = calculateWeightedStatProduct(
      stats0_15_12,
      weights,
    );

    expect(statProduct0_14_13).toBeLessThan(statProduct0_15_12);
  });
});
