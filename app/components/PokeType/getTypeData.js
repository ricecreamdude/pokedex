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
    },
    fighting: {
      id: `${scope}.fighting`,
      name: 'Fighting',
      color: '#C03028',
    },
    flying: {
      id: `${scope}.flying`,
      name: 'Flying',
      color: '#A890F0',
    },
    poison: {
      id: `${scope}.poison`,
      name: 'Poison',
      color: '#A040A0',
    },
    ground: {
      id: `${scope}.ground`,
      name: 'Ground',
      color: '#E0C068',
    },
    rock: {
      id: `${scope}.rock`,
      name: 'Rock',
      color: '#B8A038',
    },
    bug: {
      id: `${scope}.bug`,
      name: 'Bug',
      color: '#A8B820',
    },
    ghost: {
      id: `${scope}.ghost`,
      name: 'Ghost',
      color: '#705898',
    },
    steel: {
      id: `${scope}.steel`,
      name: 'Steel',
      color: '#B8B8D0',
    },
    fire: {
      id: `${scope}.fire`,
      name: 'Fire',
      color: '#F08030',
    },
    water: {
      id: `${scope}.water`,
      name: 'Water',
      color: '#6890F0',
    },
    grass: {
      id: `${scope}.grass`,
      name: 'Grass',
      color: '#78C850',
    },
    electric: {
      id: `${scope}.electric`,
      name: 'Electric',
      color: '#F8D030',
    },
    psychic: {
      id: `${scope}.psychic`,
      name: 'Psychic',
      color: '#F85888',
    },
    ice: {
      id: `${scope}.ice`,
      name: 'Ice',
      color: '#98D8D8',
    },
    dragon: {
      id: `${scope}.dragon`,
      name: 'Dragon',
      color: '#7038F8',
    },
    dark: {
      id: `${scope}.dark`,
      name: 'Dark',
      color: '#705848',
    },
    fairy: {
      id: `${scope}.fairy`,
      name: 'Fairy',
      color: '#EE99AC',
    },
  };

  return data[type];
}
