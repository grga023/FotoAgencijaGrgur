const forma = document.querySelector('.kontakt-forma');
const inputIme = document.getElementById('imeprezime');
const inputEmail = document.getElementById('email');
const textareaPoruka = document.getElementById('poruka');

forma.addEventListener('submit', function (e) {
  e.preventDefault();
  let postojiGreska = false;

  if (inputIme.value.trim() === '') {
    inputIme.classList.add('greska');
    postojiGreska = true;
  } else {
    inputIme.classList.remove('greska');
  }

  if (inputEmail.value.trim() === '' || !isValidEmail(inputEmail.value)) {
    inputEmail.classList.add('greska');
    postojiGreska = true;
  } else {
    inputEmail.classList.remove('greska');
  }

  if (textareaPoruka.value.trim() === '') {
    textareaPoruka.classList.add('greska');
    postojiGreska = true;
  } else {
    textareaPoruka.classList.remove('greska');
  }

  if (!postojiGreska) {
    forma.submit();
  }
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}