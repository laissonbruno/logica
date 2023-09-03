//Desafios JavaScript têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Solicita ao usuário o tipo do item mágico utilizando gets();
const tipoItem = gets();

// Solicita os atributos específicos do item mágico
const dano = parseInt(gets());
const resistencia = parseInt(gets());

// Imprime os detalhes do item mágico
print("Tipo:", tipoItem);
print("Dano:", dano);
print("Resistencia:", resistencia);

// TODO: Defina uma função chamada calcular Dano Combate que recebe um parâmetro chamado (dano);
// TODO: Dentro da função retone o dano;

function calcularDanoCombate(dano){
  return dano
}


// Imprime o dano de combate:
print("Dano em combate:", calcularDanoCombate(dano));