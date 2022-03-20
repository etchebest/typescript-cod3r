"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
// const aniversario = new Data(12, 1, 1979);
// aniversario.dia = 4;
// console.log(aniversario);
// const casamento = new Data();
// casamento.ano = 1980;
// console.log(casamento);
// ================== ========================
// class DataEsperta {
//   constructor(
//     public dia: number = 1,
//     public mes: number = 1,
//     public ano: number = 1970
//   ) {}
// }
// const aniversarioEsperto = new DataEsperta(12, 1, 1979);
// aniversarioEsperto.dia = 4;
// console.log(aniversarioEsperto);
// const casamentoEsperto = new DataEsperta();
// casamentoEsperto.ano = 1980;
// console.log(casamentoEsperto);
//
// class Produto {
//   constructor(
//     public nome: string,
//     public preco: number,
//     public desconto: number = 0
//   ) {}
//   public resumo(): string {
//     const kl =  `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`;
//     return kl;
//   }
// }
// const prod1 = new Produto("Camisa", 500);
// prod1.desconto = 0.5;
// console.log(prod1.resumo());
// const prod2 = new Produto("Camisa", 500, 0.15);
// somente leitura
// class Aviao {
//   public readonly modelo: string;
//   constructor(modelo: string, public readonly prefixo: string) {
//     this.modelo = modelo;
//   }
// }
// const turboElice = new Aviao('Tu-114', 'PT-ABC')
// turboElice.modelo = 'DC-8'
// turboElice.prefixo = 'PT-br'
// console.log(turboElice);
//========== desafio ===============
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidadeAtual = 0) {
        this.velocidadeAtual = velocidadeAtual;
    }
    buzinar() {
        console.log("Toooooooooot!");
    }
    acelerar(delta) {
        this.velocidadeAtual = delta;
    }
    velocidade() {
        return this.velocidadeAtual;
    }
}
const moto = new Moto("Ducati", 200);
moto.buzinar();
console.log(moto.velocidade());
moto.acelerar(30);
console.log(moto.velocidade());
console.log("===========================");
// Exercício 2 - Herança
class Objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo();
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(value) {
        this._primeiroNome =
            value.length >= 3
                ? (this._primeiroNome = value)
                : (this._primeiroNome = "");
    }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Le";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Leonardo";
console.log(estagiario.primeiroNome);
