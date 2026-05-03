document.addEventListener("DOMContentLoaded", () => {

  const phone = "+254743852667";

  /* FAB button */

  const fab = document.getElementById("whatsapp-fab");

  if (fab) {
    fab.addEventListener("click", (e) => {
      e.preventDefault();

      const serviceTitle = document.getElementById("hero-title");

      let message = "Hello Sally Spa, I would like to book an appointment.";

      if (serviceTitle) {
        message = `Hello Sally Spa, I would like to book the ${serviceTitle.textContent} treatment.`;
      }

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    });
  }

  /* Booking button inside service page */

  const bookBtn = document.getElementById("card-book-btn");

  if (bookBtn) {
    bookBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const serviceTitle = document.getElementById("hero-title");

      let message = "Hello Sally Spa, I would like to book an appointment.";

      if (serviceTitle) {
        message = `Hello Sally Spa, I would like to book the ${serviceTitle.textContent} treatment.`;
      }

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    });
  }

});