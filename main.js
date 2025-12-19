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
  const btn = document.getElementById("btn-pase");
  const modal = document.getElementById("modal-pase");
  const cerrar = document.getElementById("cerrar-modal");

  if (!btn || !modal || !cerrar) {
    console.warn("Modal: faltan elementos (btn-pase / modal-pase / cerrar-modal)");
    return;
  }

  const abrirModal = () => {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  };

  const cerrarModal = () => {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  };

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal();
  });

  cerrar.addEventListener("click", cerrarModal);

  // Cerrar clickeando fuera de la caja
  modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrarModal();
  });

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) cerrarModal();
  });
});
// ================= FIN MODAL =================


// ===== FORZAR SCROLL ARRIBA AL RECARGAR =====
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// ===== FIN FORZAR SCROLL ARRIBA AL RECARGAR =====

