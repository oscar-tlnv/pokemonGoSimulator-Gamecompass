import { IIOConnection } from './IIOConnection';
import { IPokemonIO } from '../models/pokemon';
import { readFileSync } from 'fs';

export class JSONConnection implements IIOConnection {
  filePath: string = './src/IO/data/pokemon.json';

  public async connect(): Promise<void> {
    console.warn("You are using a JSON connection, you don't need to connect");
  }

  public async disconnect(): Promise<void> {
    console.warn(
      "You are using a JSON connection, you don't need to disconnect",
    );
  }

  public isConnected(): boolean {
    console.warn('You are using a JSON connection, you are always connected');
    return true;
  }

  public async getPokemonBasicData(pokemonName: string): Promise<IPokemonIO> {
    const data = readFileSync(this.filePath, 'utf8');
    const pokemonData = JSON.parse(data);
    return pokemonData.find(
      (pokemon: IPokemonIO) => pokemon.name === pokemonName,
    );
  }

  public async getAllPokemonBasicData(): Promise<IPokemonIO[]> {
    const data = readFileSync(this.filePath, 'utf8');
    return JSON.parse(data);
  }
}
