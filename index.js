function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formatoAno = window.document.getElementById("textano");
  var resposta = window.document.getElementById("res");
  if (formatoAno.value.length == 0 || Number(formatoAno.value) > ano) {
    alert("Preenchar o campo!");
  } else {
    var buscarValorInput = window.document.getElementsByName("radsex");
    var idade = ano - Number(formatoAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (buscarValorInput[0].checked) {
      genero = "Masculino";
      if (idade >= 0 && idade <= 10) {
        img.setAttribute("src", "./Images/crianca-homem.jpg");
      } else if (idade >= 12 && idade < 30) {
        img.setAttribute("src", "./Images/jovem-homem.jpg");
      } else if (idade >= 30 && idade < 45) {
        img.setAttribute("src", "./Images/adulto-homem.jpg");
      } else {
        img.setAttribute("src", "./Images/idoso-homem.jpg");
      }
    } else if (buscarValorInput[1].checked) {
      genero = "Femenino";

      if (idade >= 0 && idade <= 10) {
        img.setAttribute("src", "./Images/crianca-mulher.jpg");
      } else if (idade >= 12 && idade < 30) {
        img.setAttribute("src", "./Images/jovem-mullher.jpg");
      } else if (idade >= 30 && idade < 45) {
        img.setAttribute("src", "./Images/adulta-mulher.jpg");
      } else {
        img.setAttribute("src", "./Images/idosa-mulher.jpg");
      }
    }
    resposta.innerHTML = `A sua idade e ${idade} anos seu sexo ${genero}`;
    resposta.appendChild(img);
  }
}
