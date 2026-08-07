import { initStudentForm } from './modules/student.js';
import { initRdvForm } from './modules/rdv.js';
import { initAbusForm } from './modules/abus.js';

// Initialisation globale au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    initStudentForm();
    initRdvForm();
    initAbusForm();
})
