document.addEventListener("DOMContentLoaded", () => {

  const fab = document.getElementById("whatsapp-fab");

  if (!fab) return;

  fab.addEventListener("click", (e) => {
    e.preventDefault();

    const message = `Hello Sally Spa, I would like to book an appointment.`;

    const encoded = encodeURIComponent(message);

    window.open(`https://wa.me/254712858543?text=${encoded}`, "_blank");
  });

});