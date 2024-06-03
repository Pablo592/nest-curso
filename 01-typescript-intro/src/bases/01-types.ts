export const name: string = 'Pablo';
export const age: number = 30;
export const isValid: boolean = true; // Declare and initialize the isValid variable

export const templateString = ` Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar variables ${name}
expresiones ${1 + 1}
numeros ${age}
booleanos ${isValid}`

console.log(templateString)