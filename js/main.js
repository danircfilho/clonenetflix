/*MODAL - NAV*/
function startNav(modalnav) {
  const modnav = document.getElementById(modalnav);
  modnav.classList.add("showmodal");
  //e (element) target id ou classe
  modnav.addEventListener("click", (e) => {
    if (e.target.id == modalnav || e.target.className == "close") {
      modnav.classList.remove("showmodal");
    }
  });
}

const navinf = document.querySelector(".nav-info");
navinf.addEventListener("click", () => startNav("modalnav"));

/*MODAL - INFORMATION*/
function startModal(modalInf) {
  const modalini = document.getElementById(modalInf);
  modalini.classList.add("showmodal");
  //e (element) target id ou classe
  modalini.addEventListener("click", (e) => {
    if (e.target.id == modalInf || e.target.className == "close") {
      modalini.classList.remove("showmodal");
    }
  });
}

const buttoninf = document.querySelector(".button-info");
buttoninf.addEventListener("click", () => startModal("modalinfo"));

function conteudo() {
  alert(
    "Para a execução do conteúdo é necessário ter uma conta na plataforma de streaming!!!"
  );
}
