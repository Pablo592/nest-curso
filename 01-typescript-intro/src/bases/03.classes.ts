import axios from "axios"
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface"

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

    async getMoves(): Promise<Move[]>{
        const {data} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        console.log(data)
        return data.moves
    }
}


export const pikachu = new Pokemon(25, 'Pikachu');
console.log(pikachu)
console.log(pikachu.getMoves())
