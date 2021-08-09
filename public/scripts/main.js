import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

// Pegar todos os botões com a classe check.
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  // Adicionar a escuta
  button.addEventListener("click", handleClick);
});

// Quando o botão delete for clicado ele abre a modal.
const deleteButtons = document.querySelectorAll(".actions a.delete");

deleteButtons.forEach((button) => {
  // Adicionar a escuta
  button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
  event.preventDefault();

  const slug = check ? "check" : "delete";
  const roomId = document.querySelector("#room-id").dataset.id;
  const questionId = event.target.dataset.id;

  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

  const modalTitleText = check ? "Marcar como lida" : "Excluir pergunta";
  const modalDescriptionText = check
    ? "Tem certeza que você deseja marcar essa pergunta como lida?"
    : "Tem certeza que você deseja excluir esta pergunta?";
  const modalButtonText = check ? "Sim, marcar como lida" : "Sim, excluir";

  modalTitle.innerHTML = modalTitleText;
  modalDescription.innerHTML = modalDescriptionText;
  modalButton.innerHTML = modalButtonText;

  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");

  //Abrir modal
  modal.open();
}
