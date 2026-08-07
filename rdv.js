export function initRdvForm() {
    const bouton2 = document.getElementById('mybutton2');
    if (bouton2) {
        bouton2.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Demande envoyée !');
        });
    }
}
