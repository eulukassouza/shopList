import { toggleToModal } from "./component-card.js"

const toggleModal = document.querySelectorAll('.toggleModal')
const modal = document.querySelector('#modal')
toggleToModal(toggleModal, modal)


document.addEventListener('keydown', (event) => {
    const stateModal = modal.classList.contains('off')
    if(event.key == 'Escape' && stateModal != true){
        modal.classList.toggle("off")
    }
})


var inputValor = document.getElementById("valor");

inputValor.addEventListener("input", function() {
    formatarNumero(this);
});

function formatarNumero(input) {
    var valor = input.value.replace(/[^\d]/g, ''); // Remover não dígitos
    var numeroDigitos = valor.length;

    if (numeroDigitos === 0) {
        // Se não houver dígitos, não faz nada
        return;
    } else if (numeroDigitos <= 3) {
        // Para até 3 dígitos, não formata
        input.value = valor;
    } else {
        // Formatar com pontos e vírgulas para mais de 3 dígitos
        var parteInteira = valor.slice(0, -2);
        var parteDecimal = valor.slice(-2);
        var valorFormatado = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + parteDecimal;
        input.value = valorFormatado;
    }
}