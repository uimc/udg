async function loadDomainList(el) {
  const src = el.dataset.src;
  if (!src) return;

  try {
    const res = await fetch(src, { cache: "no-cache" });
    if (!res.ok) throw new Error(res.status + " " + res.statusText);
    const text = (await res.text()).replace(/\r\n/g, "\n").trimEnd();
    el.textContent = text || "(empty list)";
  } catch (err) {
    el.textContent =
      "Could not load this list.\n" +
      "Open the GitHub folder instead, or check that " + src + " is reachable.\n" +
      "(" + err.message + ")";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".domain-list[data-src]").forEach(loadDomainList);
});
