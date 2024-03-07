let persona={
    nombre:"Juan",
    apellido:"Valencia",
    email:"juanmanuelva3243@gmail.com",
    edad:19,
    idioma:"es",
    nombrecompleto: function(profesion, telefono){
        return profesion+" ; "+this.nombre+" "+this.apellido+" , "+telefono
    }
}

let persona2={
    nombre:"Nicolas",
    apellido:"Arenas",
    
}

console.log(persona.nombrecompleto("Ing.Sistemas",3182997350))
console.log(persona.nombrecompleto.call(persona2, "Programador", 3127373))
