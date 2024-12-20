import { JSONConnection } from './IO/connection/JSONConnection';

const connection = new JSONConnection();
connection.connect();
console.log(connection.isConnected());
console.log(connection.getPokemonBasicData('Bulbasaur'));
