function verificaHTTPS(string) {
  const padrao = /^https:/i;

  return padrao.test(string);
}

function verificaBlob(string) {
  const padrao = /^blob:/i;
  return padrao.test(string);
}

export { verificaHTTPS, verificaBlob };
