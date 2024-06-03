export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


interface Pokemon {
    name: string,
    id: number,
    type: string,
    stats: {
        hp: number,
        attack: number,
        defense: number,
        specialAttack: number,
        specialDefense: number,
        speed: number
    }
}

export const pikachu:Pokemon = {
    name: 'Pikachu',
    id: 25,
    type: 'Electric',
    stats: {
        hp: 35,
        attack: 55,
        defense: 40,
        specialAttack: 50,
        specialDefense: 50,
        speed: 90
    }
}

console.log(pikachu)