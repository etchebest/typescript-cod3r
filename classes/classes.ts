// class Data {
//publicos
//   dia: number;
//   public mes: number;
//   ano: number;

//   constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
//     this.dia = dia;
//     this.mes = mes;
//     this.ano = ano;
//   }
// }

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
  constructor(nome: string, private velocidadeAtual: number = 0) {}

  buzinar() {
    console.log("Toooooooooot!");
  }

  acelerar(delta: number) {
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
abstract class Objeto2D {
  public base: number = 0;
  public altura: number = 0;

  abstract area(): number;
}

class Retangulo extends Objeto2D {
  area(): number {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo();
retangulo.base = 5;
retangulo.altura = 7;

console.log(retangulo.area());

// Exercício 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = "";

  get primeiroNome(): string {
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