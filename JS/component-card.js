export function toggleToModal(el, modal){
    el.forEach((el) => {
        el.onclick = () => {
            modal.classList.toggle("off")
        }
    })
}