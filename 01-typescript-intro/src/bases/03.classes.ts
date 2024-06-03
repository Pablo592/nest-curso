import axios from "axios"

export class Pokemon {

    get imageUrl():string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`
    }

   constructor(public id:number,
               public name:string){}

    scream(){
       return 'Pika Pika!'
    }
    speak(){
       return 'Pikachu!'
    }

    async getMoves(){
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        console.log(data)
        return resp.data.moves
    }
}


export const pikachu = new Pokemon(25, 'Pikachu');
console.log(pikachu)
console.log(pikachu.getMoves())
