const nome = "Spider";
let exp = 5000; 


const niveis = {
  Ferro: { min: 0, max: 1000 },
  Bronze: { min: 1001, max: 2000 },
  Prata: { min: 2001, max: 3000 },
  Ouro: { min: 3001, max: 5000 },
  Platina: { min: 5001, max: 8000 },
  Diamante: { min: 8001, max: 10000 },
  Ascendente: { min: 10001, max: Infinity },
};


function determinarNivel(exp) {
  for (const nivel in niveis) {
    if (exp >= niveis[nivel].min && exp <= niveis[nivel].max) {
      return nivel;
    }
  }
  return "Nível não definido";
}

const nivelDoHeroi = determinarNivel(exp);

console.log(`O Herói ${nome} possui o nível ${nivelDoHeroi}`);
