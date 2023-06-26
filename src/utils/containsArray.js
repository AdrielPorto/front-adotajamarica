function qtdPetsDisponiveis(pets) {
  const petsDisponiveis = pets.filter((pet) => pet.disponibilidade);
  return petsDisponiveis.length;
}
function qtdPetsDoados(pets) {
  console.log(pets);
  const petsIndisponiveis = pets.filter((pet) => !pet.disponibilidade);
  return petsIndisponiveis.length;
}

function qtdPetsAdotados(pets) {}

export { qtdPetsDisponiveis, qtdPetsDoados, qtdPetsAdotados };
