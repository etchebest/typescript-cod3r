// let const

let seraQuePode = "sim";

console.log(seraQuePode);

// this

// function normalComThis() {
//   console.log(this);
// }

//.bind() joga dentro do this da função
// const normalComThisEspecial = normalComThis.bind({ nome: "Ana" });

// normalComThisEspecial();

// rest e spreed

const number = [1, 2, 3, 4, 5];
console.log(Math.max(...number));

const turmaA: string[] = ["Joao", "MAria", "Fernando"];
const turmaB: string[] = ["Marlom", "Denilson", ...turmaA];
console.log(turmaB);

//exemplo de função com rest

function retornaArrayArg(a: number, ...args: number[]): number[] {
  return args;
}
function retornaArray(...args: number[]): number[] {
  return args;
}

const numeros = retornaArray(1, 2, 5, 20, 82, 6547);
console.log(numeros);

// callback
function esperar3Segundos(callback: (dado: string) => void) {
  setTimeout(() => {
    callback("3s depois...");
  }, 3000);
}

esperar3Segundos(function (resultado: string) {
  console.log(resultado);
});

function esperar3SegundosPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve("3s depois promise...");
    }, 3000);
  });
}

esperar3SegundosPromise().then((dado) => console.log(dado));


fetch("https://swapi.dev/api/people/1")
  .then((res) => res.json())
  .then((person) => person.films)
  .then((films) => fetch(films[0]))
  .then((resFilm) => resFilm.json())
  .then((filme) => console.log(filme.title))
  .catch(err => console.log('Erros '+ err))


  