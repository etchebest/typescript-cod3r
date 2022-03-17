"use strict";
let nome = "Joao";
console.log(nome);
// nome = 28;
//number
let idade = 27;
idade = 26.7;
console.log(idade);
//boolean
let hobbies = true;
hobbies = false;
console.log(hobbies);
// array
let hobbies2 = ["cozinhar", "praticar esportes"];
console.log(hobbies2[0]);
console.log(typeof hobbies2);
hobbies2 = [100, "200", true];
// hobbies2 = 100
// tuplas
let endereco = ["Av Principal", 99];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
})(Cor || (Cor = {}));
let minhacor = Cor.Verde;
console.log(minhacor);
console.log(Cor.Azul);
// funcao
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function multiplicar(nA, nB) {
    return nA * nB;
}
console.log(multiplicar(2, 10.3));
//objetos
let usuarios = {
    nome: "Joao",
    idade: 27,
};
// função utilizando Alias
let funcionario = {
    supervisores: ["Joao", "Pedro", "Ana"],
    registrarPonto(horario) {
        return horario <= 8 ? "Horario normal" : "Fora do horário";
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.registrarPonto(8));
console.log(funcionario.registrarPonto(9));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
// com unio pode ser utilizado number e string, não utilizar any
nota = "10";
console.log(`Minha nota é ${nota}`);
// Checando tipos de forma manual
let valor = 30;
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        return (this.saldo += valor);
    },
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["325655478", "519855458"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
