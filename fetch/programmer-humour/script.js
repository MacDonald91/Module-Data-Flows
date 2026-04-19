function fetchComic() {
  const container = document.getElementById("comic-container");

  fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // requirement

      container.innerHTML = `
        <h2>${data.title}</h2>
        <img src="${data.img}" alt="${data.alt}" />
        <p>${data.alt}</p>
      `;
    })
    .catch(error => {
      container.innerHTML = `<p>Error loading comic 😢</p>`;
      console.error(error);
    });
}

window.addEventListener("load", fetchComic);