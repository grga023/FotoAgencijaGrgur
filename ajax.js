const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const { slike } = JSON.parse(this.responseText);

    const najpopularnijeFoto = document.querySelector(".najpopularnije-fotografije");

    slike.forEach(slika => {
      const slikaDiv = document.createElement("div");
      const slikaImg = document.createElement("img");

      slikaImg.setAttribute("src", slika.src);
      slikaImg.setAttribute("alt", slika.alt);

      slikaDiv.appendChild(slikaImg);

      najpopularnijeFoto.appendChild(slikaDiv);
    })
  }
};

xhttp.open("GET", "/slikePocetna.json", true);

xhttp.setRequestHeader("Content-Type", "application/json");

xhttp.send();