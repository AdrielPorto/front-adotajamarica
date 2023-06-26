export const FormatDate = (dataString) => {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const data = new Date(dataString);
  const dia = data.getUTCDate();
  const mes = meses[data.getUTCMonth()];
  const ano = data.getUTCFullYear();

  return `${dia} de ${mes} de ${ano}`;
};
