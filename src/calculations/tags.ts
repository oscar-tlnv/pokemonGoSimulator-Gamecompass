export function getMinimumIVFromTags(tags: string[]): number {
  let minIV = 0;
  if (
    tags.includes('legendary') ||
    tags.includes('mythical') ||
    tags.includes('ultrabeast')
  ) {
    minIV = 1;
  }
  if (tags.includes('shadow') && tags.includes('legendary')) {
    minIV = 10;
  }
  if (tags.includes('untradeable')) {
    minIV = 10;
  }
  if (tags.includes('research')) {
    minIV = 10;
  }
  if (tags.includes('giovanni')) {
    minIV = 6;
  }
  return minIV;
}

export function getMinimumLevelFromTags(tags: string[]): number {
  let minLevel = 1;
  if (
    tags.includes('legendary') ||
    tags.includes('mythical') ||
    tags.includes('ultrabeast')
  ) {
    minLevel = 20;
  }
  if (tags.includes('research')) {
    minLevel = 15;
  }
  if (tags.includes('giovanni')) {
    minLevel = 8;
  }
  return minLevel;
}
