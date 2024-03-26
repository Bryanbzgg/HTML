alerta = () => {
  alert(`aviso, você foi avisado!!`);
};
const enviar = () => {
  let nome = document.getElementById("nome").value;
  document.getElementById(
    "resposta"
  ).innerHTML = `<h2>olá ${nome}, formulario enviado com sucesso</h2>`;
  if (nome == "") {
    alert("bem vindo");
  } else {
    alert(`olá ${nome}, bem vindo!`);
  }
};
