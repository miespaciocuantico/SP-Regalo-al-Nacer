/**
 * UN REGALO AL NACER — Página de ventas
 * Inyecta los iconos de línea y maneja el acordeón de FAQ.
 */

const ICONOS = {
  destello: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4.2M12 16.8V21M3 12h4.2M16.8 12H21M5.8 5.8l3 3M15.2 15.2l3 3M18.2 5.8l-3 3M8.8 15.2l-3 3"/></svg>`,
  fecha: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/><circle cx="8.3" cy="14.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="12" cy="14.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="15.7" cy="14.5" r="0.9" fill="currentColor" stroke="none"/></svg>`,
  nombre: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-6 0-13 3-15 12-0.3 1.3 1 2.3 2.3 2 9-2 12-9 12-14Z"/><path d="M9.5 14.5 18 6"/><path d="M4 20l2.5-2.5"/></svg>`,
  album: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.2c-2-1.4-5-1.9-8-1.4v13.4c3-0.5 6 0 8 1.4 2-1.4 5-1.9 8-1.4V4.8c-3-0.5-6 0-8 1.4Z"/><path d="M12 6.2v13.4"/></svg>`,
  estrella: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.5l2.4 6.3L21 11l-6.6 2.2L12 21.5l-2.4-8.3L3 11l6.6-2.2Z"/></svg>`,
  corazon: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 20.3s-7.3-4.6-9.6-9.2C1 8 2 4.8 5.1 4.1 7.4 3.6 9.8 4.8 12 7.5c2.2-2.7 4.6-3.9 6.9-3.4 3.1 0.7 4.1 3.9 2.7 7-2.3 4.6-9.6 9.2-9.6 9.2Z"/></svg>`,
  brote: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-9.5"/><path d="M12 12c0-4.2-3.2-6.3-7.3-6.3 0 4.2 3.1 6.3 7.3 6.3Z"/><path d="M12 12.5c0-3.6 2.6-5.7 6.3-5.7 0 3.6-2.7 5.7-6.3 5.7Z"/></svg>`,
  manoCorazon: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 19.5s-6.4-4-8.4-8.1C2.3 8.4 3.2 5.6 5.9 5c2-0.4 4 0.6 6.1 2.9 2.1-2.3 4.1-3.3 6.1-2.9 2.7 0.6 3.6 3.4 2.3 6.4-2 4.1-8.4 8.1-8.4 8.1Z"/></svg>`,
  brujula: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-4 2 2-6Z" fill="currentColor" stroke="none"/></svg>`,
  huella: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><ellipse cx="12" cy="15" rx="4.2" ry="6"/><circle cx="8.3" cy="6.5" r="1.4"/><circle cx="11.3" cy="4.7" r="1.5"/><circle cx="14.5" cy="4.9" r="1.4"/><circle cx="16.8" cy="6.8" r="1.2"/></svg>`,
  camara: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.5h3.2L9 6h6l1.8 2.5H20a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13.2" r="3.4"/></svg>`,
  regla: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V9M9 20v-6M14 20v-9M19 20V6"/><path d="M2.5 20.5h19"/></svg>`,
  biberon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="9" width="8" height="12" rx="2.5"/><path d="M9.5 9V6.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5V9"/><path d="M9.7 13h4.6M9.7 16h4.6"/></svg>`,
  regalo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="9.5" width="17" height="4" rx="1"/><rect x="4.5" y="13.5" width="15" height="7" rx="1"/><path d="M12 9.5v11"/><path d="M12 9.5c-1.5-3-3.5-4-5-2.7-1.2 1 0.3 2.7 5 2.7ZM12 9.5c1.5-3 3.5-4 5-2.7 1.2 1-0.3 2.7-5 2.7Z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 6"/></svg>`,
  flecha: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  constelacion: `<svg viewBox="0 0 160 28" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="14" x2="60" y2="8" stroke-dasharray="2,3"/><line x1="60" y1="8" x2="100" y2="20" stroke-dasharray="2,3"/><line x1="100" y1="20" x2="150" y2="14" stroke-dasharray="2,3"/><circle cx="10" cy="14" r="2.5" fill="currentColor" stroke="none"/><circle cx="60" cy="8" r="3.5" fill="currentColor" stroke="none"/><circle cx="100" cy="20" r="2.5" fill="currentColor" stroke="none"/><circle cx="150" cy="14" r="3" fill="currentColor" stroke="none"/></svg>`,
};

function aplicarIconos() {
  document.querySelectorAll('[data-icono]').forEach(el => {
    const clave = el.dataset.icono;
    if (ICONOS[clave]) el.innerHTML = ICONOS[clave];
  });
}

function alternarFaq(boton) {
  const item = boton.closest('.faq-item');
  const yaAbierto = item.classList.contains('abierto');
  document.querySelectorAll('.faq-item.abierto').forEach(el => el.classList.remove('abierto'));
  if (!yaAbierto) item.classList.add('abierto');
}

/* ---------- POPUP DE INTENCIÓN DE SALIDA ---------- */
let quinceSegundosPasaron = false;
let popupYaMostrado = false;

setTimeout(() => { quinceSegundosPasaron = true; }, 15000);

function mostrarPopupSalida() {
  if (popupYaMostrado || !quinceSegundosPasaron) return;
  if (sessionStorage.getItem('popupSalidaMostrado')) return;

  popupYaMostrado = true;
  sessionStorage.setItem('popupSalidaMostrado', '1');
  document.getElementById('popup-salida').classList.remove('oculto');
}

function cerrarPopupSalida() {
  document.getElementById('popup-salida').classList.add('oculto');
}

document.addEventListener('mouseleave', (evento) => {
  if (evento.clientY <= 0) mostrarPopupSalida();
});

/* ---------- NOTIFICACIONES DE INSPIRACIÓN ---------- */
const FRASES_INSPIRACION = [
  { encabezado: "Natalia de Barcelona, España", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Sofía de Santiago, Chile", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "María de Medellin, Colombia", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Ana Cristina de Monterrey, México", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Paula de Cd. de México, México ", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Gabriela de San José, Costa Rica", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Daniela de Montevideo, Uruguay", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Almudena de Madrid, España", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Nicole de Panamá", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Florence de Chicago, Estados Unidos", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Francisco de Sevilla, España", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Valentina de Bogotá, Colombia", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Lucía de Guadalajara, México", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Liliana de Monterrey, México", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Andrea de Bogotá, Colombia", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Luis de California, Estados Unidos", frase: "Acaba de comprar Un Regalo al Nacer" },
  { encabezado: "Isabel de Santiago, Chile", frase: "Acaba de comprar Un Regalo al Nacer" },

];

let barajaNotifInspiracion = [];
let cicloNotifInspiracionActivo = false;

function barajarArreglo(arreglo) {
  const copia = [...arreglo];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function obtenerSiguienteFraseAleatoria() {
  if (barajaNotifInspiracion.length === 0) {
    barajaNotifInspiracion = barajarArreglo(FRASES_INSPIRACION);
  }
  return barajaNotifInspiracion.pop();
}

function mostrarSiguienteNotifInspiracion() {
  const contenedor = document.getElementById('notificacion-inspiracion');
  if (!contenedor) return;

  const datos = obtenerSiguienteFraseAleatoria();

  contenedor.querySelector('.notif-encabezado').textContent = datos.encabezado;
  contenedor.querySelector('.notif-frase').textContent = datos.frase;

  contenedor.classList.remove('oculta');
  requestAnimationFrame(() => contenedor.classList.add('visible'));

  setTimeout(() => {
    contenedor.classList.remove('visible');
    setTimeout(() => contenedor.classList.add('oculta'), 400); // espera el fade-out
  }, 4000);
}

function iniciarCicloNotifInspiracion() {
  if (cicloNotifInspiracionActivo) return;
  cicloNotifInspiracionActivo = true;

  const programarSiguiente = () => {
    const espera = 15000 + Math.random() * 5000; // entre 15 y 20 segundos
    setTimeout(() => {
      mostrarSiguienteNotifInspiracion();
      programarSiguiente();
    }, espera);
  };
  programarSiguiente();
}

document.addEventListener('DOMContentLoaded', () => {
  const seccionEsencia = document.getElementById('seccion-esencia');
  if (!seccionEsencia) return;

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        iniciarCicloNotifInspiracion();
        observador.disconnect(); // ya no hace falta seguir observando
      }
    });
  }, { threshold: 0.3 });

  observador.observe(seccionEsencia);
});
document.addEventListener('DOMContentLoaded', aplicarIconos);
