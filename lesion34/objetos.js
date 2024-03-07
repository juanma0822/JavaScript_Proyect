let persona={
    nombre:"Juan",
    apellido:"Valencia",
    email:"juanmanuelva3243@gmail.com",
    edad:19,
    idioma:"es",
    get languaje(){

        return this.idioma.toUpperCase();
    },
    set languaje(lang){
        this.idioma=lang.toUpperCase()
    },
    get nombrecompleto(){

        return this.nombre+" "+this.apellido
    }
}

//Otra forma de crear objetos con una funcion de java

let persona2= new Object()
persona2.nombre="Mauricio"
persona2.apellido="Valencia"

//Otras formas de acceder a las propiedades del bojeto
console.log(persona['apellido'])

//For in

for (const key in persona) {
    console.log(persona[key])
}

persona.telefono= "3182997350"

delete persona.telefono

console.log(persona)

//Concatenar cada valor de cada propiedad
console.log(persona.nombre+" "+persona.apellido)

let personaInfo=Object.values(persona)
console.log(personaInfo)

let personaJson= JSON.stringify(persona)
console.log(personaJson)

console.log(persona.nombrecompleto)

persona.languaje="en"
console.log(persona.languaje)