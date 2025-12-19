// ===================== HEADER INCLUDE ======================
// Función: Inyecta header.html dentro de #header-placeholder
// Robusto para GitHub Pages (rutas relativas correctas).
document.addEventListener("DOMContentLoaded", async () => {
  const slot = document.getElementById("header-placeholder");
  if (!slot) return;

  const tryFetch = async (url) => {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("No se pudo cargar header.html");
    return res.text();
  };

  try {
    // 1) Intento principal (según URL actual)
    const headerUrl = new URL("header.html", window.location.href).toString();
    const html = await tryFetch(headerUrl);
    slot.innerHTML = html;

  } catch (err1) {
    try {
      // 2) Fallback: mismo directorio (por si hay algún caso raro)
      const html = await tryFetch("./header.html");
      slot.innerHTML = html;

    } catch (err2) {
      console.error(err1);
      console.error(err2);
      slot.innerHTML = "<!-- Error cargando el header -->";
    }
  }
});
// =================== FIN HEADER INCLUDE ====================

// ================= MODAL ADQUIRÍ TU PASE =================
document.addEventListener("DOMContentLoaded", () => {

  const btnPase = document.querySelector(".btn.primary");
  const modal = document.getElementById("modal-pase");
  const btnOk = document.getElementById("modal-ok");

  if(!btnPase || !modal) return;

  btnPase.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });

  btnOk.addEventListener("click", () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  });

  modal.addEventListener("click", (e) => {
    if(e.target === modal){
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }
  });

});
// ================= FIN MODAL =================


