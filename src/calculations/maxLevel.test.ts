import { calculateMaxLevelForCPLimit } from './maxLevel';
import { describe, expect, it } from '@jest/globals';

describe('calculateMaxLevelForCPLimit', () => {
  it('Testing Medicham stats for Great league', () => {
    const speciesStats = { attack: 121, defense: 152, stamina: 155 };
    const ivs = { attack: 5, defense: 15, stamina: 15 };
    const minLevel = 1;
    const cpLimit = 1500;

    const result = calculateMaxLevelForCPLimit(
      speciesStats,
      ivs,
      minLevel,
      cpLimit,
    );

    expect(result.level).toBe(50);
    expect(result.cp).toBe(1499);
  });

  it('Testing Medicham stats for Ultra league', () => {
    const speciesStats = { attack: 143, defense: 204, stamina: 155 };
    const ivs = { attack: 15, defense: 15, stamina: 15 };
    const minLevel = 1;
    const cpLimit = 2500;

    const result = calculateMaxLevelForCPLimit(
      speciesStats,
      ivs,
      minLevel,
      cpLimit,
    );

    expect(result.level).toBe(0);
    expect(result.cp).toBe(0);
  });

  it('should return level 50 and max CP if cpLimit is 10000. Dialga stats', () => {
    const speciesStats = { attack: 275, defense: 211, stamina: 205 };
    const ivs = { attack: 15, defense: 15, stamina: 15 };
    const minLevel = 1;
    const cpLimit = 10000;

    const result = calculateMaxLevelForCPLimit(
      speciesStats,
      ivs,
      minLevel,
      cpLimit,
    );

    expect(result.level).toBe(50);
    expect(result.cp).toBe(4565);
  });

  it('should return 0 CP and 0 level when minLevel CP exceeds cpLimit. Dialga stats', () => {
    const speciesStats = { attack: 275, defense: 211, stamina: 205 };
    const ivs = { attack: 15, defense: 15, stamina: 15 };
    const minLevel = 20;
    const cpLimit = 1500;

    const result = calculateMaxLevelForCPLimit(
      speciesStats,
      ivs,
      minLevel,
      cpLimit,
    );

    expect(result.level).toBe(0);
    expect(result.cp).toBe(0);
  });

  it('should handle exact CP limit edge case. Medicham stats', () => {
    const speciesStats = { attack: 121, defense: 152, stamina: 155 };
    const ivs = { attack: 7, defense: 14, stamina: 15 };
    const minLevel = 1;
    const cpLimit = 1500;

    const result = calculateMaxLevelForCPLimit(
      speciesStats,
      ivs,
      minLevel,
      cpLimit,
    );

    expect(result.cp).toBe(1500);
    expect(result.level).toBe(49);
  });

  it('should return 0.5 increments for level. Medicham stats', () => {
    const speciesStats = { attack: 121, defense: 152, stamina: 155 };
    const ivs = { attack: 6, defense: 14, stamina: 15 };
    const minLevel = 1;
    const cpLimit = 1500;

    const result = calculateMaxLevelForCPLimit(
      speciesStats,
      ivs,
      minLevel,
      cpLimit,
    );
    expect(result.level).toBe(49.5);
    expect(result.cp).toBe(1497);
  });
});
