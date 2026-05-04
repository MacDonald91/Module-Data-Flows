function fetchComic() {
  const container = document.getElementById("comic-container");
  const loading = document.getElementById("loading");

  fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // requirement

      // remove loading message
      if (loading) loading.remove();

      container.innerHTML = `
        <h2>${data.title}</h2>
        <img src="${data.img}" alt="${data.alt}" />
        <p>${data.alt}</p>
      `;
    })
    .catch(error => {
      if (loading) {
        loading.textContent = "Error loading comic 😢";
      } else {
        container.innerHTML = `<p>Error loading comic 😢</p>`;
      }
      console.error(error);
    });
}

window.addEventListener("load", fetchComic);