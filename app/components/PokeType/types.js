/*
 * Pokemon Types
 *
 * This contains all the text for the HomePage component.
 */
export const scope = 'boilerplate.components.PokeType';

export default function defineTypes(type) {
  const data = {
    normal: {
      id: `${scope}.normal`,
      text: 'Normal',
      color: '#A8A878',
    },
    fighting: {
      id: `${scope}.fighting`,
      text: 'Fighting',
      color: '#C03028',
    },
    flying: {
      id: `${scope}.flying`,
      text: 'Flying',
      color: '#A890F0',
    },
    poison: {
      id: `${scope}.poison`,
      text: 'Poison',
      color: '#A040A0',
    },
    ground: {
      id: `${scope}.ground`,
      text: 'Ground',
      color: '#E0C068',
    },
    rock: {
      id: `${scope}.rock`,
      text: 'Rock',
      color: '#B8A038',
    },
    bug: {
      id: `${scope}.bug`,
      text: 'Bug',
      color: '#A8B820',
    },
    ghost: {
      id: `${scope}.ghost`,
      text: 'Ghost',
      color: '#705898',
    },
    steel: {
      id: `${scope}.steel`,
      text: 'Steel',
      color: '#B8B8D0',
    },
    fire: {
      id: `${scope}.fire`,
      text: 'Fire',
      color: '#F08030',
    },
    water: {
      id: `${scope}.water`,
      text: 'Water',
      color: '#6890F0',
    },
    grass: {
      id: `${scope}.grass`,
      text: 'Grass',
      color: '#78C850',
    },
    electric: {
      id: `${scope}.electric`,
      text: 'Electric',
      color: '#F8D030',
    },
    psychic: {
      id: `${scope}.psychic`,
      text: 'Psychic',
      color: '#F85888',
    },
    ice: {
      id: `${scope}.ice`,
      text: 'Ice',
      color: '#98D8D8',
    },
    dragon: {
      id: `${scope}.dragon`,
      text: 'Dragon',
      color: '#7038F8',
    },
    dark: {
      id: `${scope}.dark`,
      text: 'Dark',
      color: '#705848',
    },
    fairy: {
      id: `${scope}.fairy`,
      text: 'Fairy',
      color: '#EE99AC',
    },
  };

  return data[type];
}
