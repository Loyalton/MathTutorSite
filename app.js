const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('/');
  const aboutMenu = document.querySelector('#about-me');
  const servicesMenu = document.querySelector('#subjects-offered');
  const payMethodsMenu = document.querySelector('#payment-methods');
  const ratesMenu = document.querySelector('#math-tutoring-rates');
  const contactMenu = document.querySelector('#contact-form');
  const refundMenu = document.querySelector('#refund-cancellation');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Translation section:

const translations = {
  // Navbar and Sections
  "Math Tutoring Services": "Servicios de Tutoría de Matemáticas",
  "About Me": "Sobre Mí",
  "Subjects Offered": "Materias Ofrecidas",
  "Math Tutoring Rates": "Tarifas de Tutoría de Matemáticas",
  "Payment Methods": "Métodos de Pago",
  "Contact Form": "Formulario de Contacto",
  "Refund and Cancellation Policy": "Política de Reembolsos y Cancelaciones",
  "Contact": "Contacto",
  "Sign Up": "Registrarse",

  // About Me Section
  "Hi! I offer tutoring for a wide range of math subjects, from elementary math to advanced college-level courses. I am a college student majoring in Electrical Engineering. I love math and helping others to become confident and fill in the gaps in their knowledge. I will meet you at any level you are and we will grow from there. Online and in-person (within 50 miles of the greater Atlanta area) tutoring available. Flexible hours 7 days a week. Hablo español!": "¡Hola! Ofrezco tutoría en una amplia gama de materias de matemáticas, desde matemáticas básicas hasta cursos universitarios avanzados. Soy estudiante universitario de Ingeniería Eléctrica. Me encanta la matemática y ayudar a otros a ganar confianza y llenar los vacíos en su conocimiento. Te encontraré en el nivel en el que estés y creceremos desde ahí. Tutoría en línea y en persona (dentro de un radio de 50 millas del área metropolitana de Atlanta) disponible. Horarios flexibles los 7 días de la semana. ¡Hablo español!",

  "Reach out to me via phone or email for a consultation.": "Contáctame por teléfono o correo electrónico para una consulta.",
  "Email:": "Correo Electrónico:",
  "Phone:": "Teléfono:",

  // Subjects Offered
  "Middle School (Grades 6-8)": "Escuela Secundaria (Grados 6-8)",
  "6th Grade Math: Basic arithmetic, fractions, decimals, percentages, ratios, introduction to algebraic thinking.": "Matemáticas de 6.º grado: Aritmética básica, fracciones, decimales, porcentajes, proporciones, introducción al pensamiento algebraico.",
  "7th Grade Math: Pre-Algebra, proportions, simple equations, inequalities, probability, and geometry basics.": "Matemáticas de 7.º grado: Pre-álgebra, proporciones, ecuaciones simples, desigualdades, probabilidad y fundamentos de geometría.",
  "8th Grade Math: Algebra 1 (for advanced students) or Pre-Algebra (integers, exponents, linear equations, graphing).": "Matemáticas de 8.º grado: Álgebra 1 (para estudiantes avanzados) o pre-álgebra (números enteros, exponentes, ecuaciones lineales, gráficos).",

  "High School (Grades 9-12)": "Escuela Preparatoria (Grados 9-12)",
  "Algebra 1: Variables, linear equations, inequalities, functions, graphing, and polynomials.": "Álgebra 1: Variables, ecuaciones lineales, desigualdades, funciones, gráficos y polinomios.",
  "Geometry: Shapes, theorems, coordinate geometry, trigonometric ratios, and proofs.": "Geometría: Figuras, teoremas, geometría de coordenadas, razones trigonométricas y demostraciones.",
  "Algebra 2: Quadratic functions, complex numbers, logarithms, polynomials, exponential functions.": "Álgebra 2: Funciones cuadráticas, números complejos, logaritmos, polinomios y funciones exponenciales.",
  "Pre-Calculus: Advanced algebra, trigonometry, limits, introduction to derivatives.": "Pre-Cálculo: Álgebra avanzada, trigonometría, límites e introducción a derivadas.",
  "Calculus (AP Calculus AB/BC): Differentiation, integration, and limits (for advanced students).": "Cálculo (AP Calculus AB/BC): Derivación, integración y límites (para estudiantes avanzados).",
  "Statistics (AP Statistics): Probability, data analysis, inferential statistics (alternative to Calculus).": "Estadística (AP Statistics): Probabilidad, análisis de datos, estadísticas inferenciales (alternativa a cálculo).",

  "Advanced & College-Level Courses": "Cursos Avanzados y Nivel Universitario",
  "Calculus 1 & 2: Limits, derivatives, integrals, applications of calculus.": 
  "Cálculo 1 y 2: Límites, derivadas, integrales y aplicaciones del cálculo.",
  "Differential Equations: Solving ODEs, applications in engineering and physics.": 
  "Ecuaciones Diferenciales: Resolución de EDOs, aplicaciones en ingeniería y física.",

  // Payment Section
  "Make sure to fill out the contact form below if you haven't already indicated what service you selected. Once payment is received I will send you an email with the next steps to schedule our session. Virtual Sessions are done via Google Meets or Zoom.": "Asegúrese de completar el formulario de contacto a continuación si aún no ha indicado qué servicio seleccionó. Una vez recibido el pago, le enviaré un correo electrónico con los siguientes pasos para programar nuestra sesión. Las sesiones virtuales se realizan a través de Google Meet o Zoom.",
  "Attachments can be directly emailed to me using the contact email listed above.": "Los archivos adjuntos pueden enviarse directamente por correo electrónico utilizando la dirección de contacto mencionada arriba.",

  // Tutoring rates table
  "Rates are based on the complexity of the subject, session type, and whether tutoring is online or in-person.":
  "Las tarifas se basan en la complejidad del tema, el tipo de sesión y si la tutoría es en línea o en persona.",

  // Table Headers
  "Grade Level": "Nivel de Grado",
  "Service": "Servicio",
  "Online Rate": "Tarifa en Línea",
  "In-Person Rate": "Tarifa en Persona",
  "Premium (Travel to You)": "Tarifa Premium (Viaje a Usted)",

  // Grade Categories
  "Middle School": "Escuela Secundaria",
  "High School": "Escuela Preparatoria",
  "College Level": "Nivel Universitario",

  // Services
  "- Individual Problem Walkthrough": "- Explicación Individual de Problema",
  "- 1 Hour Tutoring Session": "- Sesión de Tutoría de 1 Hora",
  "- 2 Hour Tutoring Session": "- Sesión de Tutoría de 2 Horas",

  // Pricing Note
  "Note: Premium rates apply if I have to travel to you. Prices may vary depending on subject complexity.":
  "Nota: Se aplican tarifas premium si debo viajar a su ubicación. Los precios pueden variar según la complejidad del tema.",
  // Payment Section
  "Pay via PayPal": "Pagar con PayPal",
  "Select a service...": "Seleccione un servicio...",
  "Middle School (6-8)": "Escuela Secundaria (Grados 6-8)",
  "High School (9-12)": "Escuela Preparatoria (Grados 9-12)",
  "College Level / Advanced Math": "Nivel Universitario / Matemáticas Avanzadas",
  "Premium Travel Charges": "Cargos Adicionales por Viaje",
  "Other": "Otro",
  "Enter Custom Amount": "Ingrese Monto Personalizado",
  "Memo: what this payment is for?": "Memo: ¿para qué es este pago?",
  "Additional Travel Fee (Local)": "Tarifa Adicional por Viaje (Local)",
  "Additional Travel Fee (Extended Distance)": "Tarifa Adicional por Viaje (Distancia Extendida)",
  "Individual Problem Walkthrough (Online) - $5+": "Explicación de Problema Individual (En Línea) - $5+",
  "1 Hour Tutoring (Online) - $25": "Sesión de Tutoría de 1 Hora (En Línea) - $25",
  "2 Hour Tutoring (Online) - $45": "Sesión de Tutoría de 2 Horas (En Línea) - $45",
  "1 Hour Tutoring (In-Person) - $35": "Sesión de Tutoría de 1 Hora (Presencial) - $35",
  "2 Hour Tutoring (In-Person) - $60": "Sesión de Tutoría de 2 Horas (Presencial) - $60",
  "1 Hour Tutoring (Online) - $30": "Sesión de Tutoría de 1 Hora (En Línea) - $30",
  "2 Hour Tutoring (Online) - $50": "Sesión de Tutoría de 2 Horas (En Línea) - $50",
  "1 Hour Tutoring (In-Person) - $40": "Sesión de Tutoría de 1 Hora (Presencial) - $40",
  "2 Hour Tutoring (In-Person) - $70": "Sesión de Tutoría de 2 Horas (Presencial) - $70",
  "Additional Travel Fee (Local) - $10": "Tarifa Adicional por Viaje (Local) - $10",
  "Additional Travel Fee (Extended Distance) - $20": "Tarifa Adicional por Viaje (Distancia Extendida) - $20",
  "Custom Payment": "Pago Personalizado",
  "Please select a valid service and amount.": "Seleccione un servicio y un monto válido.",

  // Contact Form Section
  "Contact Form": "Formulario de Contacto",
  "Attachments can be directly emailed to me using the contact email listed above.": 
  "Los archivos adjuntos pueden enviarse directamente por correo electrónico utilizando la dirección de contacto mencionada arriba.",
  "Your Name": "Tu Nombre",
  "Your Email": "Tu Correo Electrónico",
  "Your Phone Number": "Tu Número de Teléfono",
  "Describe what you need help with": "Describe en qué necesitas ayuda",
  "Submit": "Enviar",
 

  // Refund and Cancellation Policy
  "Refund and Cancellation Policy": "Política de Reembolso y Cancelación",
  "We strive to offer flexible and professional tutoring sessions. However, to ensure fairness and respect for both parties, we have the following policies in place regarding cancellations and refunds:": "Nos esforzamos por ofrecer sesiones de tutoría flexibles y profesionales. Sin embargo, para garantizar la equidad y el respeto para ambas partes, hemos establecido las siguientes políticas con respecto a cancelaciones y reembolsos.",
  "24-Hour Notice: Cancellations must be made at least 24 hours in advance to avoid any charges. If you cancel within 24 hours, the session will be non-refundable.": 
  "Aviso de 24 horas: Las cancelaciones deben realizarse con al menos 24 horas de anticipación para evitar cargos. Si cancela dentro de las 24 horas, la sesión no será reembolsable.",
  "Late Cancellations: If you fail to show up for the scheduled session without prior cancellation, it will be treated as a missed appointment and no refund will be issued.": 
  "Cancelaciones tardías: Si no se presenta a la sesión programada sin una cancelación previa, se considerará una cita perdida y no se emitirá reembolso.",

  "No Refunds for Late Cancellations: If you cancel less than 24 hours before the appointment, or do not show up, you will be charged for the session.": 
  "Sin reembolsos por cancelaciones tardías: Si cancela con menos de 24 horas de anticipación o no se presenta, se le cobrará la sesión.",
  "Extenuating Circumstances: If I am unable to attend the session due to circumstances out of your control (e.g., illness or emergencies) and we are unable to reschedule, you will be provided with a full refund.": 
  "Circunstancias atenuantes: Si no puedo asistir a la sesión debido a circunstancias fuera de mi control (por ejemplo, enfermedad o emergencias) y no podemos reprogramar, se le proporcionará un reembolso completo.",
  "Emergency Situations on Your Part: If an emergency or special circumstance arises and you are unable to make the session, proof of the emergency (e.g., doctor's note) will be required to qualify for a refund. Cancellations made after the 24-hour window, due to emergencies, will be refunded if the evidence is provided.": 
  "Situaciones de emergencia de su parte: Si surge una emergencia o circunstancia especial y no puede asistir a la sesión, se requerirá prueba de la emergencia (por ejemplo, una nota del médico) para calificar para un reembolso. Las cancelaciones realizadas después del período de 24 horas, debido a emergencias, serán reembolsadas si se proporciona evidencia.",
  // Rescheduling Sessions
  "Rescheduling Sessions:": "Reprogramación de Sesiones:",
  "If you need to reschedule a session, please do so at least 24 hours in advance. We will do our best to accommodate you. If rescheduling is not possible due to my schedule, a full refund will be provided.":
  "Si necesita reprogramar una sesión, hágalo al menos con 24 horas de anticipación. Haremos nuestro mejor esfuerzo para acomodarlo. Si no es posible reprogramar debido a mi disponibilidad, se le otorgará un reembolso completo.",

  // Special Requests or Emergencies
  "Special Requests or Emergencies:": "Solicitudes Especiales o Emergencias:",
  "If you are facing a situation that may prevent you from attending the scheduled session, please reach out as soon as possible. We understand that life happens, and we will work with you to make reasonable accommodations or offer a refund if needed.":
  "Si enfrenta una situación que pueda impedirle asistir a la sesión programada, comuníquese lo antes posible. Entendemos que la vida sucede, y trabajaremos con usted para hacer adaptaciones razonables o ofrecer un reembolso si es necesario."
  
};



// Reverse translations (for switching back to English)
const reverseTranslations = {};
for (let key in translations) {
  reverseTranslations[translations[key]] = key;
}

document.addEventListener("DOMContentLoaded", function () {
  const transbutton = document.getElementById("translate-btn");

  if (!transbutton) {
      console.error("Translation button not found!");
      return;
  }

  transbutton.addEventListener("click", function () {
      const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, optgroup, li, td, tr, th, button");
      const navLinks = document.querySelectorAll("a"); // Separate navigation links
      const inputs = document.querySelectorAll("input[placeholder], textarea[placeholder]");
      const options = document.querySelectorAll("#service-select option");

      // Check if we're translating to Spanish or English
      const isEnglish = transbutton.innerText.trim() === "Español";

      // Special handling for navigation links (to keep href intact)
      navLinks.forEach(el => {
        el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) { // Only modify text content
                const text = node.nodeValue.trim();
                if (isEnglish && translations[text]) {
                    node.nodeValue = translations[text]; // Translate to Spanish
                } else if (!isEnglish && reverseTranslations[text]) {
                    node.nodeValue = reverseTranslations[text]; // Translate back to English
                }
            }
        });
      });
      
      // Translating the rest without messing up the links
      elements.forEach(el => {
          const text = el.innerText.trim();
          if (isEnglish && translations[text]) {
              el.innerText = translations[text]; // Translate to Spanish
          } else if (!isEnglish && reverseTranslations[text]) {
              el.innerText = reverseTranslations[text]; // Translate back to English
          }
      });

      // Translate input and textarea placeholders
      inputs.forEach(input => {
          const placeholderText = input.placeholder.trim();
          if (isEnglish && translations[placeholderText]) {
              input.placeholder = translations[placeholderText];
          } else if (!isEnglish && reverseTranslations[placeholderText]) {
              input.placeholder = reverseTranslations[placeholderText];
          }
      });

      // Translate dropdown options doesn't work right now
      options.forEach(option => {
          const optionText = option.innerText.trim();
          if (isEnglish && translations[optionText]) {
              option.innerText = translations[optionText]; 
          } else if (!isEnglish && reverseTranslations[optionText]) {
              option.innerText = reverseTranslations[optionText];
          }
      });

      // Change button text
      transbutton.innerText = isEnglish ? "English" : "Español";
  });
});

// End translation section