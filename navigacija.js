const meniDugme = document.querySelector(".meni-dugme");

meniDugme.addEventListener("click", () => {
  meniDugme.classList.toggle("otvoren");

  if (meniDugme.classList.contains("otvoren")) {
    document.documentElement.style.overflowY = 'hidden'
  } else {
    document.documentElement.style.overflowY = ''
  }

});