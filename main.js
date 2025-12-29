// ===================== INCLUDES (HEADER + FOOTER) ======================
// Función: Inyecta header.html y footer.html en sus placeholders.
// Robusto para GitHub Pages (rutas relativas correctas).
document.addEventListener("DOMContentLoaded", async () => {
  const loadInclude = async (placeholderId, fileName) => {
    const slot = document.getElementById(placeholderId);
    if (!slot) return;

    const tryFetch = async (url) => {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error(`No se pudo cargar ${fileName}`);
      return res.text();
    };

    try {
      // 1) Intento principal (según URL actual)
      const includeUrl = new URL(fileName, window.location.href).toString();
      const html = await tryFetch(includeUrl);
      slot.innerHTML = html;

    } catch (err1) {
      try {
        // 2) Fallback: mismo directorio
        const html = await tryFetch(`./${fileName}`);
        slot.innerHTML = html;

      } catch (err2) {
        console.error(err1);
        console.error(err2);
        slot.innerHTML = `<!-- Error cargando ${fileName} -->`;
      }
    }
  };

  await loadInclude("header-placeholder", "header.html");
  await loadInclude("footer-placeholder", "footer.html");
});
// =================== FIN INCLUDES ====================


// ================= MODAL ADQUIRÍ TU PASE =================
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-pase");
  const modal = document.getElementById("modal-pase");
  const cerrar = document.getElementById("cerrar-modal");

  // Si no existe el modal en esta página, no hacemos nada
  if (!btn || !modal || !cerrar) return;

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
