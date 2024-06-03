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
}


export const pikachu = new Pokemon(25, 'Pikachu');
console.log(pikachu)
