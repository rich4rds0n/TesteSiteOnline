function mudarEstilo() {
    var estilo = document.getElementById("estilo");
    var botao = document.getElementById("mudar-estilo");
    if (estilo.href.endsWith("branco.css")) {
      estilo.href = "estilos/style-preto.css";
      botao.innerHTML = "Light";
    } else {
      estilo.href = "estilos/style-branco.css";
      botao.innerHTML = "Dark";
    }
  }