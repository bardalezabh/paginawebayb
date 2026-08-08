(function () {
  "use strict";

  var whatsappNumber = document.body.getAttribute("data-whatsapp") || "";

  var toggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.innerHTML = isOpen
        ? '<svg width="26" height="26" aria-hidden="true"><use href="#icon-close"/></svg>'
        : '<svg width="26" height="26" aria-hidden="true"><use href="#icon-menu"/></svg>';
    });
  }

  // En móvil, el submenú "Servicios" se abre con un tap en lugar de :hover.
  var dropdownToggle = document.querySelector(".has-dropdown > a");
  var dropdownParent = document.querySelector(".has-dropdown");

  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 860px)").matches) {
        e.preventDefault();
        dropdownParent.classList.toggle("open");
      }
    });
  }

  // Cierra el menú móvil al navegar a un enlace.
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 860px)").matches && !link.closest(".has-dropdown")) {
        nav.classList.remove("open");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
          toggle.innerHTML = '<svg width="26" height="26" aria-hidden="true"><use href="#icon-menu"/></svg>';
        }
      }
    });
  });

  // Formulario de contacto: arma un mensaje de WhatsApp con los datos ingresados.
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(contactForm);
      var lines = [
        "Hola AYB, quisiera cotizar un servicio.",
        "Nombre: " + data.get("name"),
        "Teléfono: " + data.get("phone"),
        data.get("company") ? "Empresa: " + data.get("company") : null,
        "Servicio: " + data.get("service"),
        "Mensaje: " + data.get("message")
      ].filter(Boolean);
      var text = encodeURIComponent(lines.join("\n"));
      window.open("https://wa.me/" + whatsappNumber + "?text=" + text, "_blank", "noopener");
    });
  }
})();
