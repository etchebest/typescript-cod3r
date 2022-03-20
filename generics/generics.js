"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("joao").length);
console.log(echo(27).length);
console.log(echo({ nome: "joao", idade: 26 }));
// Usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("Marcelo").length);
console.log(echoMelhorado(28));
console.log(echoMelhorado({ nome: "Marcelo", idade: 27 }));
