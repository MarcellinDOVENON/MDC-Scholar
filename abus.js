export function initAbusForm() {
    const bouton3 = document.getElementById('mybutton3');
    if (bouton3) {
        bouton3.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Votre dénonciation a été prise en compte. Nous vous recontacterons bientôt.');
        });
    }
}
