function modal() {
    const btnAbrir = document.querySelectorAll("[data-modal='abrir']");
    const containerModal = document.querySelector(".modal-conatiner");

    if (btnAbrir && containerModal) {
        function toggleModal(e) {
            e.preventDefault();
            containerModal.classList.toggle("ativo");
        }

        function clickForaModal(e) {
            if (e.target === this) toggleModal(e);
        }

        btnAbrir.forEach((btn) => {
            btn.addEventListener("click", toggleModal);
        });
        containerModal.addEventListener("click", clickForaModal);
    }
}
modal();


function fixarHeader() {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("change", window.scrollY > 40);
    });
}
fixarHeader();