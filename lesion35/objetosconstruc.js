//Metodo CONSTRUCTOR de tipo PERSONA
function Personas(nombre,apellido,email){

    this.nombre= nombre;
    this.apellido= apellido;
    this.email= email;
    this.nombreCompreto= function(){
        return this.nombre+" "+this.apellido
    }
}

//Para agregar atributos del objeto fuera de este= PROTOTYPE
Personas.prototype.tel = "3182997350"

let padre= new Personas("Mauricio","Valencia","mauriciovalencia@gmail.com")
//padre.tel="3122374331"
alert(padre.tel)

let madre= new Personas("Diana","Triana","DianaTriana08@gmail.com")
//madre.tel="3166997062"
alert(madre.tel)