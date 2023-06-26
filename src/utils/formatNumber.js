export const formatWhatsAppNumber = (numeroTelefone) => {
  if (numeroTelefone) {
    const numeroSemFormatacao = numeroTelefone.replace(/\D/g, "");
    return numeroSemFormatacao;
  }
};
