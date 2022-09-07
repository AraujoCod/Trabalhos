const $form = document.querySelector("form");
const $ca = document.querySelector("#ca");
const $co = document.querySelector("#co");
const $hipotenusa = document.querySelector("#hipotenusa");

function hipotenusa() {
  const ca = $ca.value;
  const co = $co.value;

  if (!co) {
    createAlert("Insira o valor do cateto oposto");
  } else if (!ca) {
    createAlert("Insira o valor do cateto adjacente");
  } else if (ca <= 0 || co <= 0) {
    createAlert("Entre com valores maiores que 0");
  } else {
    $hipotenusa.value = Math.hypot(ca, co).toFixed(2);
  }
}

$form.addEventListener("submit", function (event) {
    event.preventDefault();
    hipotenusa();
  });

function deleteAlert() {
  const list = document.querySelectorAll(".alert");
  for (const item of list) {
    item.remove();
  }
}

function createAlert(msg) {
    document
      .querySelector("body")
      .insertAdjacentHTML("beforebegin", `<div class='alert'> Coloque um valor </div>`);
  
    setTimeout(function () {
      deleteAlert();
    }, 3000);
  }
