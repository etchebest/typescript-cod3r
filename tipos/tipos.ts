let nome: string = "Joao";

console.log(nome);

// nome = 28;

//number

let idade: number = 27;
idade = 26.7;

console.log(idade);

//boolean

let hobbies: boolean = true;
hobbies = false;

console.log(hobbies);

// array
let hobbies2: any[] = ["cozinhar", "praticar esportes"];

console.log(hobbies2[0]);
console.log(typeof hobbies2);

hobbies2 = [100, "200", true];
// hobbies2 = 100

// tuplas
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

//enums

enum Cor {
  Cinza, // 0
  Verde = 100, // 1
  Azul, // 2
}

let minhacor: Cor = Cor.Verde;
console.log(minhacor);
console.log(Cor.Azul);

// funcao

function retornaNome(): string {
  return nome;
}

console.log(retornaNome());

function multiplicar(nA: number, nB: number): number {
  return nA * nB;
}

console.log(multiplicar(2, 10.3));

//objetos

let usuarios = {
  nome: "Joao",
  idade: 27,
};

// Alias para ser reutilizado
type Funcionario = {
  supervisores: string[];
  registrarPonto: (ponto: number) => string;
};

// função utilizando Alias
let funcionario: Funcionario = {
  supervisores: ["Joao", "Pedro", "Ana"],
  registrarPonto(horario: number): string {
    return horario <= 8 ? "Horario normal" : "Fora do horário";
  },
};

console.log(funcionario.supervisores);
console.log(funcionario.registrarPonto(8));
console.log(funcionario.registrarPonto(9));

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);

// com unio pode ser utilizado number e string, não utilizar any
nota = "10";
console.log(`Minha nota é ${nota}`);

// Checando tipos de forma manual
let valor = 30;

//desafio

type Conta = {
  saldo: number;
  depositar: (x: number) => void;
};

type Correntista = {
  nome: string;
  contaBancaria: Conta;
  contatos: string[];
};

let contaBancaria: Conta = {
  saldo: 3456,
  depositar(valor: number) {
    return (this.saldo += valor);
  },
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["325655478", "519855458"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
