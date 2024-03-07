class Persona{

    static contadorPersona=0;

    email = "Mi correo actual";

    constructor(nombre,apellido){
        this._nombre=nombre
        this._apellido=apellido
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre=nombre
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido=apellido
    }

    nombreCompleto(){
        return this._nombre+" "+this._apellido
    }

    static saludar(){
        console.log("Saludos desde el metodo static")
    }

    static saludar2(persona){
        console.log("Saludos "+persona._nombre+"!")
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido)//Llama al constructor del padre
        this._departamento=departamento
    }

    get departamento(){
        return this._departamento
    }

    set departamento(depa){
        this._departamento=depa
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+", "+this._departamento
    }

}

let amor= new Empleado("Sofia","Galeano","Abogada")
//Saltar mensaje emergente en pantalla con "alert"
//alert(amor.departamento)
//console.log(amor)

let yo= new Empleado("Juan","Valencia","Ingeniero en Sistemas")
//Muestra en consola el nombre con el departamento a traves de la Sobreescritura
//console.log(yo.nombreCompleto())

//Uso de Static para llamar metodos a traves de las clases sin referenciar un objeto
//Persona.saludar();

//Uso desde una clase heredada del mismo metodo
//Empleado.saludar();

//Saludo Utilizando un objeto
//Persona.saludar2(yo)

//Uso de Static (Todo lo que sea static se llava con el nombre de la clase)
console.log(Persona.contadorPersona)

/*
    NO ESTATICO: Pertenece a los objetos se tiene que llamar desde un obj
    ESTATICO: Pertenece a la clase y se puede llamar mediante la clase
*/
console.log(yo.email)