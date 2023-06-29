function qtdPetsDisponiveis(pets) {
  const petsDisponiveis = pets.filter((pet) => pet.disponibilidade);
  return petsDisponiveis.length;
}
function qtdPetsDoados(pets, usuario_id) {
  const petsDoados = pets.filter((pet) => pet.usuario_id === usuario_id);

  const petsDisponiveis = petsDoados.filter((pet) => !pet.disponibilidade);
  return petsDisponiveis.length;
}

function qtdPetsAdotados(pets, usuario_id) {
  const petsAdotados = pets.filter((pet) => pet.usuario_id !== usuario_id);

  return petsAdotados.length;
}

export { qtdPetsDisponiveis, qtdPetsDoados, qtdPetsAdotados };
