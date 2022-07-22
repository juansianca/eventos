class Contacto { 
    constructor(nombre, apellido, email, consulta){
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.consulta = consulta
}}

const consultas = []

const form = document.getElementById("contactanosForm")

const divConsulta = document.getElementById("divConsulta")


form.addEventListener("submit", (event) => { 

    event.preventDefault() 
        
    let Nombre = document.getElementById("idNombre").value
    let Apellido = document.getElementById("idApellido").value
    let Email = document.getElementById("idEmail").value
    let Consulta = document.getElementById("idConsulta").value

    const consulta = new Contacto (Nombre, Apellido, Email, Consulta)

    consultas.push(consulta)
    console.log(consultas)
    
})

  