const tamnaTema = document.querySelector(".dugme-tamna-tema");
const oznakaTema = tamnaTema.querySelector("span");

function ugradiCookie(ime, vrednost, daniTrajanja) {
  let istice = "";
  if (daniTrajanja) {
    const datum = new Date();
    datum.setTime(datum.getTime() + (daniTrajanja * 24 * 60 * 60 * 1000));
    istice = "; expires=" + datum.toUTCString();
  }
  document.cookie = ime + "=" + (vrednost || "") + istice + "; path=/";
}

function dobiCookie(ime) {
  const imeEQ = ime + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(imeEQ) === 0) return c.substring(imeEQ.length, c.length);
  }
  return null;
}

function ukljuciTamnuTemu() {
  document.documentElement.dataset.tema = "tamna";
  oznakaTema.classList.add("tamna-tema--aktivna");
  ugradiCookie("tema", "tamna", 365);
}

function ukljuciSvetluTemu() {
  document.documentElement.dataset.tema = "svetla";
  oznakaTema.classList.remove("tamna-tema--aktivna");
  ugradiCookie("tema", "svetla", 365);
}

function promeniTemu() {
  if (dobiCookie("tema") === "tamna") {
    ukljuciTamnuTemu();
  } else {
    ukljuciSvetluTemu();
  }
}

tamnaTema.addEventListener("click", function () {
  if (dobiCookie("tema") === "tamna") {
    ukljuciSvetluTemu();
  } else {
    ukljuciTamnuTemu();
  }
});

if (dobiCookie("tema") === "tamna") {
  ukljuciTamnuTemu();
} else {
  ukljuciSvetluTemu();
}