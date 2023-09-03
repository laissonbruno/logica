//Desafios JavaScript têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(string) para um valor numérico(Int).
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

// TODO: Calcule a posição final do herói:
const posicaoFinal = posicaoInicial + totalPassos;


// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);