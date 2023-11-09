//La palabra async no es necesaria en las funciones, porque ya son asincronas
//Igual proyectan una sincronia visual
async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar() {
  return new Promise((resolve, reject) => {
    // Usamos la sintaxis ES6
    setTimeout(function () {
      console.log("bla bla bla");
      resolve();
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //validamos el error o comprobación
      console.log("Adios " + nombre);
      //if(err) reject('Hay un error')
      resolve();
    }, 1000);
  });
}

//await hola('Emir'); //Esto es una mala sintaxis
// await solo es valido dentro de una función asincrona
async function main() {
  let nombre = await hola("Emir");
  await hablar();
  await hablar();
  await hablar();
  await adios('Emir');
  console.log('Termina el proceso');
}

console.log('Empezamos el proceso...');
main();
console.log('Esta va a ser la segunda instrucción');

//Código en Inglés
//Es asincrono y retorna una promesa
function sayHello(name) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Hello "+ name);
      resolve(name);
    },1000);
  });
}

function talk(name) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      console.log("bla bla bla");
      resolve(name);
    }, 1000)
  });
}

function sayBye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //validamos el error o comprobación
      console.log("Goodbye " + name);
      //if(err) reject('Hay un error')
      resolve();
    }, 1000);
  });
}

async function conversation(name) {
  console.log('Code in english');
  console.log("Starting async process...");
  await sayHello(name);
  await talk();
  await talk();
  await talk();
  await sayBye(name);
  console.log("Process completed");
}

conversation('Emir');