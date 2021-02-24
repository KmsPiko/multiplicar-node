
const fs = require('fs');
const colors = require('colors');

let crearArchivo=(base,limite)=>{
    let promesa= new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject(`El valor introducido ${base} no es numero`)
            return 
        }


    let data=""
    
    for(let a =1;a<=limite;a++){
        data+=`${base}*${a}=${base*a}\n`;
        }

    
        fs.writeFile(`tablas/(table-${base}-${limite}.txt`, data, (err) => {
    
        if (err) 
        reject(err);
        else
        resolve(`tabla-${base}-al-limite${limite}.txt`);
    });
    })
    return promesa
    
}

let listarTabla=(base, limite)=>{

    console.log("===========================".green);
    console.log(`==tABLa DE ${base}==`.green);
    console.log("===========================".green);
    for(let a=1;a<=limite;a++){
        console.log(`${base}*${a}=${base*a}`);
    }
}

module.exports={
    crearArchivo,
    listarTabla
}