import "./styles.css";
import { initSharedJS } from "./layout";

initSharedJS();

// Proceso interactivo
(function () {
  const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>(".proceso-tab"));
  const descs = Array.from(document.querySelectorAll<HTMLElement>(".proceso-desc"));
  const dots = Array.from(document.querySelectorAll<HTMLElement>(".proceso-dot"));
  const prevBtn = document.querySelector<HTMLButtonElement>("#proceso-prev");
  const nextBtn = document.querySelector<HTMLButtonElement>("#proceso-next");
  if (!tabs.length) return;
  let current = 0;

  function goTo(i: number) {
    tabs[current].classList.remove("active");
    descs[current].classList.remove("active");
    dots[current]?.classList.remove("active");
    current = i;
    tabs[current].classList.add("active");
    descs[current].classList.add("active");
    dots[current]?.classList.add("active");
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === tabs.length - 1;
  }

  tabs.forEach((tab, i) => tab.addEventListener("click", () => goTo(i)));
  prevBtn?.addEventListener("click", () => goTo(current - 1));
  nextBtn?.addEventListener("click", () => goTo(current + 1));
})();
