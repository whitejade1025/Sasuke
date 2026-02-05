/**
 * Uchiha Sasuke - Falling Kunai, Shuriken & Chidori Lightning Effects
 */
(function () {
  "use strict";

  const effectsContainer = document.querySelector(".sasuke-effects");
  if (!effectsContainer) return;

  function createKunai() {
    const kunai = document.createElement("div");
    kunai.className = "kunai";
    kunai.style.left = Math.random() * 100 + "vw";
    kunai.style.animationDuration = 4 + Math.random() * 4 + "s";
    kunai.style.animationDelay = Math.random() * 2 + "s";
    effectsContainer.appendChild(kunai);
    setTimeout(() => kunai.remove(), 10000);
  }

  function createShuriken() {
    const shuriken = document.createElement("div");
    shuriken.className = "shuriken";
    shuriken.style.left = Math.random() * 100 + "vw";
    shuriken.style.animationDuration = 5 + Math.random() * 3 + "s";
    shuriken.style.animationDelay = Math.random() * 2 + "s";
    effectsContainer.appendChild(shuriken);
    setTimeout(() => shuriken.remove(), 12000);
  }

  function createChidoriBolt() {
    const bolt = document.createElement("div");
    bolt.className = "chidori-bolt";
    bolt.style.left = Math.random() * 100 + "vw";
    bolt.style.top = Math.random() * 100 + "vh";
    bolt.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.querySelector(".chidori-lightning")?.appendChild(bolt);
    setTimeout(() => bolt.remove(), 500);
  }

  // Spawn kunai every 1.2s
  setInterval(createKunai, 1200);

  // Spawn shuriken every 1.8s
  setInterval(createShuriken, 1800);

  // Chidori lightning flicker every 300ms
  setInterval(createChidoriBolt, 300);
})();
