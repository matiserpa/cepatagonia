// ===================== HEADER INCLUDE ======================
// Función: Inyecta header.html dentro de #header-placeholder
// Robusto para GitHub Pages (rutas relativas correctas).
document.addEventListener("DOMContentLoaded", async () => {
  const slot = document.getElementById("header-placeholder");
  if (!slot) return;

  try {
    // Construye ruta relativa desde la ubicación actual (evita 404)
    const headerUrl = new URL("header.html", window.location.href);

    const res = await fetch(headerUrl.toString(), { cache: "no-store" });
    if (!res.ok) throw new Error("No se pudo cargar header.html");

    const html = await res.text();
    slot.innerHTML = html;

  } catch (err) {
    console.error(err);
    slot.innerHTML = "<!-- Error cargando el header -->";
  }
});
// =================== FIN HEADER INCLUDE ====================
