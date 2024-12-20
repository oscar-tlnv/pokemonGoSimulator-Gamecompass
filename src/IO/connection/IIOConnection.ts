import { IPokemonIO } from '../models/pokemon';

export interface IIOConnection {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  getPokemonBasicData(pokemonName: string): Promise<IPokemonIO>;
  getAllPokemonBasicData(): Promise<IPokemonIO[]>;
}
