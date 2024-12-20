import { pokemonType } from './pokemonTypes';

export interface IPokemonIO {
  dex: number;
  name: string;
  speciesStats: {
    attack: number;
    defense: number;
    stamina: number;
  };
  type: pokemonType[];
  fastMoves: string[];
  chargeMoves: string[];
  eliteMoves: string[];
  tags: string[];
  released: boolean;
  family?: {
    id: string;
    evolutions?: string[];
    parent?: string;
  };
}
