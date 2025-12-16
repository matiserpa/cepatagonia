// ===================== HEADER INCLUDE ======================
document.addEventListener("DOMContentLoaded", async () => {
  const slot = document.getElementById("header-placeholder");
  if (!slot) return;

  try {
    const res = await fetch("header.html", { cache: "no-store" });
    if (!res.ok) throw new Error("No se pudo cargar header.html");

    const html = await res.text();
    slot.innerHTML = html;

  } catch (err) {
    console.error(err);
    slot.innerHTML = "<!-- Error cargando el header -->";
  }
});
// =================== FIN HEADER INCLUDE ====================

