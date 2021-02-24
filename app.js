const argv = require('./config/yargs').argv;
const colors = require('colors');

//const multiplicar=require("./multiplicar/multiplicar")
const {crearArchivo,listarTabla}=require("./multiplicar/multiplicar")


let comando=argv._[0];
switch(comando){
  case "listar":
    listarTabla(argv.base,argv.limite)
    break;
  case "crear":
    crearArchivo(argv.base,argv.limite)
    .then(archivo=>console.log(`Archivo creado: ${colors.green(archivo)}`))
    .catch(e=>console.log(e))
    break;
    default:
      console.log("comando no reconocido");

}
//requires

//const fs = require('express');
//const fs = require('./fs');

//let base = "abc";

//console.log(multiplicar);
/*
let data=""
for(let a =1;a<=10;a++){
   data+=`${base}*${a}=${base*a}\n`;
}

fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado');
  });*/

  //console.log(process.argv);
  //let argv2=process.argv; 
 // console.log("Limite",argv.limite);

   // console.log(argv.base);
  
  //let parametro=argv[2];
  //let base=parametro.split('=')[1]
 /* console.log(base);

  crearArchivo(base)
    .then(archivo=>console.log(`Archivo creado: ${archivo}`))
    .catch(e=>console.log(e))*/