let trenutniSlajdIndeks = 0;
const slajdovi = document.querySelectorAll(".slajd");

function prikaziSlajd(n) {
  slajdovi[trenutniSlajdIndeks].classList.remove("aktivan");
  trenutniSlajdIndeks = (n + slajdovi.length) % slajdovi.length; // vrti se u krug slajder
  slajdovi[trenutniSlajdIndeks].classList.add("aktivan");
}

function promeniSlajd(n) {
  prikaziSlajd(trenutniSlajdIndeks + n);
}
