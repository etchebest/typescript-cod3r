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
