/*
 * Pokemon Types
 *
 * This contains all the name for the HomePage component.
 */
export const scope = 'boilerplate.components.PokeType';

export default function defineTypes(type) {
  const data = {
    normal: {
      id: `${scope}.normal`,
      name: 'Normal',
      color: '#A8A878',
      link: "https://pokeapi.co/api/v2/type/1"
    },
    fighting: {
      id: `${scope}.fighting`,
      name: 'Fighting',
      color: '#C03028',
      link: "https://pokeapi.co/api/v2/type/2"
    },
    flying: {
      id: `${scope}.flying`,
      name: 'Flying',
      color: '#A890F0',
      link: "https://pokeapi.co/api/v2/type/3"
    },
    poison: {
      id: `${scope}.poison`,
      name: 'Poison',
      color: '#A040A0',
      link: "https://pokeapi.co/api/v2/type/4"
    },
    ground: {
      id: `${scope}.ground`,
      name: 'Ground',
      color: '#E0C068',
      link: "https://pokeapi.co/api/v2/type/5"
    },
    rock: {
      id: `${scope}.rock`,
      name: 'Rock',
      color: '#B8A038',
      link: "https://pokeapi.co/api/v2/type/6"
    },
    bug: {
      id: `${scope}.bug`,
      name: 'Bug',
      color: '#A8B820',
      link: "https://pokeapi.co/api/v2/type/7"
    },
    ghost: {
      id: `${scope}.ghost`,
      name: 'Ghost',
      color: '#705898',
      link: "https://pokeapi.co/api/v2/type/8"
    },
    steel: {
      id: `${scope}.steel`,
      name: 'Steel',
      color: '#B8B8D0',
      link: "https://pokeapi.co/api/v2/type/9"
    },
    fire: {
      id: `${scope}.fire`,
      name: 'Fire',
      color: '#F08030',
      link: "https://pokeapi.co/api/v2/type/10"
    },
    water: {
      id: `${scope}.water`,
      name: 'Water',
      color: '#6890F0',
      link: "https://pokeapi.co/api/v2/type/11"
    },
    grass: {
      id: `${scope}.grass`,
      name: 'Grass',
      color: '#78C850',
      link: "https://pokeapi.co/api/v2/type/12"
    },
    electric: {
      id: `${scope}.electric`,
      name: 'Electric',
      color: '#F8D030',
      link: "https://pokeapi.co/api/v2/type/13"
    },
    psychic: {
      id: `${scope}.psychic`,
      name: 'Psychic',
      color: '#F85888',
      link: "https://pokeapi.co/api/v2/type/14"
    },
    ice: {
      id: `${scope}.ice`,
      name: 'Ice',
      color: '#98D8D8',
      link: "https://pokeapi.co/api/v2/type/15"
    },
    dragon: {
      id: `${scope}.dragon`,
      name: 'Dragon',
      color: '#7038F8',
      link: "https://pokeapi.co/api/v2/type/16"
    },
    dark: {
      id: `${scope}.dark`,
      name: 'Dark',
      color: '#705848',
      link: "https://pokeapi.co/api/v2/type/17"
    },
    fairy: {
      id: `${scope}.fairy`,
      name: 'Fairy',
      color: '#EE99AC',
      link: "https://pokeapi.co/api/v2/type/18"
    },
  };

  return data[type];
}
