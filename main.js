
function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => section.classList.add("hidden"));

    document.getElementById(sectionId).classList.remove("hidden");
}

function VolverInicio() {

    location.reload();


};


const clientes = {
    "Ana López": { faltas: 2, bloqueado: false },
    "Carlos Martínez": { faltas: 0, bloqueado: false },
};

const botonesGuardar = document.querySelectorAll('.btn-guardar');

// Manejar registro de asistencia
botonesGuardar.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        const fila = e.target.closest('tr');
        const cliente = fila.cells[0].textContent;
        const asistencia = fila.querySelector('.asistencia').value;

        if (asistencia === "Faltó") {
            clientes[cliente].faltas += 1;

            // Bloquear si las faltas exceden el límite
            if (clientes[cliente].faltas >= 3) {
                clientes[cliente].bloqueado = true;
                alert(`El cliente ${cliente} ha sido bloqueado debido a múltiples faltas.`);
            }
        }

        alert(`Asistencia de ${cliente} registrada como: ${asistencia}`);
    });
});

// Manejar envío del informe
const formInforme = document.getElementById('form-informe');
formInforme.addEventListener('submit', (e) => {
    e.preventDefault();

    const fecha = document.getElementById('fecha-sesion').value;
    const incidentes = document.getElementById('detalle-incidentes').value;
    const acciones = document.getElementById('acciones-correctivas').value;

    // Simular el registro del informe
    console.log("Informe registrado:", { fecha, incidentes, acciones });

    alert("Informe de sesión enviado exitosamente.");
    formInforme.reset();
});

document.querySelectorAll('.seleccionar').forEach((boton) => {
    boton.addEventListener('click', () => {
        const planSeleccionado = boton.getAttribute('data-plan');
        const precio = parseInt(boton.getAttribute('data-precio')); // Obtiene el precio del plan seleccionado
        const tipoTarjeta = document.getElementById('tipo-tarjeta').value; // Obtiene el tipo de tarjeta seleccionada

        let mensaje = `El monto a pagar por el plan ${planSeleccionado} es: S/${precio}`;

        // Si el tipo de tarjeta es crédito, agrega un recargo ficticio
        if (tipoTarjeta === "credito") {
            mensaje += ` (incluye recargo por pago con tarjeta de crédito)`;
        }

        // Muestra la alerta con el monto
        alert(mensaje);
    });
});

// Función para manejar el cálculo del pago
document.getElementById("btn-pagar").addEventListener("click", () => {
    const tipoTarjeta = document.getElementById("tipo-tarjeta").value;
    let mensaje = `El monto a pagar con tarjeta de ${tipoTarjeta} es: `;

    let precio = 0;
    document.querySelectorAll('.seleccionar').forEach((boton) => {
        if (boton.classList.contains('seleccionado')) {
            precio = parseInt(boton.getAttribute('data-precio'));
        }
    });

    if (precio === 0) {
        mensaje = 'Por favor selecciona un plan.';
    } else {
        mensaje += `S/${precio}`;
        if (tipoTarjeta === "credito") {
            mensaje += ` (incluye recargo por pago con tarjeta de crédito)`;
        }
    }

    alert(mensaje);
});

