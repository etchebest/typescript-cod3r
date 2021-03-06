function echo(objeto: any) {
  return objeto;
}

console.log(echo("joao").length);
console.log(echo(27).length);
console.log(echo({ nome: "joao", idade: 26 }));

// Usando generics

function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
  return objeto;
}

console.log(echoMelhorado("Marcelo").length);
console.log(echoMelhorado<number>(28));
console.log(echoMelhorado({ nome: "Marcelo", idade: 27 }));

// GEneric disponiveis na API

const avaliacoes: Array<number> = [10, 9.3, 7, 7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')

console.log(avaliacoes);

//Array

function imprimir<T>(args: T[]) {
  args.forEach((el) => console.log(el));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["Anan", "Joao", "Andre"]);

type Clientes = {
  nome: string;
  idade: number;
};
imprimir<Clientes>([{ nome: "Antonio", idade: 28 }]);

// class com generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}
  abstract executar(): R;
}

// o tipo já foi resolvido ao estender
class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}
console.log(new SomaBinaria(3, 4).executar());

//desafio

//Data vem da pasta classes
class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }
  executar(): string {
    const t1 = this.getTime(this.operando1);
    const t2 = this.getTime(this.operando2);
    const diferenca = Math.abs(t1 - t2); // abs tras a diferença corretamente sem problema de vir negativo, indiferente da ordem.
    const dia = 1000 * 60 * 60 * 24; // quantidade milisegundo de um dia
    return `${Math.ceil(diferenca / dia)} dia(s)`;
  }
}

const d1 = new Data(1, 2, 2021);
const d2 = new Data(1, 3, 2022);

console.log(new DiferencaEntreDatas(d1, d2).executar());

// ========== desafios
//Nessa linha esta utilizando constraints
class Fila<T extends number | string> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(el: T) {
    this.fila.push(el);
  }

  proximo(): T | null {
    if (this.fila.length >= 0 && this.fila[0]) {
      const primeiro = this.fila[0];
      this.fila.splice(0, 1);
      return primeiro;
    }
    return null;
  }

  imprimir() {
    console.log(this.fila);
  }
}

const fila = new Fila<string>("Gui", "Pedro", "Ju", "Lu");

fila.imprimir();
fila.entrar("Rafael");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());

fila.imprimir();

// nessa situação não funcionará pois foi definida os tipos que a classe funcionará - L 81
// const outraFila = new Fila<boolean>(true, false) 
