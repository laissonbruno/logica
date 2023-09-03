//Desafios JavaScript têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(string) para um valor numérico(Int).
let num1 = parseInt(gets());
let num2 = parseInt(gets());
const multiplicador = 100

//TODO: Implemente a lógica para exibir o xpGanho:
const xpGanho = num1 * num2 * multiplicador;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");