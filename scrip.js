// se definen las arrays
const arrays = { a: "1", b: "2", c: "3" };
// se usa la funcion object.key para obtener las keys de las arrays
const object = (Object.keys(arrays).sort());
// se usa la funcion object.values para obtener los valores de las arrays y el sort para ordenarlos albafeticamente
const values = (Object.values(arrays).sort());
// unimos las arrays para mostrarlas en diferentes matrices ordenadas alfabeticamente
console.log("[[" + object + "]" + " " + "[" + values + "]]");


const arrays2 = { a: "Apple", b: "Microsoft", c: "Google" };
const object2 = (Object.keys(arrays2).sort());
const values2 = (Object.values(arrays2).sort());
console.log("[[" + object2 + "]" + " " + "[" + values2 + "]]");


const arrays3 = { key1: "true", key2: "false", key3: "undefined" };
const object3 = (Object.keys(arrays3).sort());
const values3 = (Object.values(arrays3).sort());
console.log("[[" + object3 + "]" + " " + "[" + values3 + "]]");


