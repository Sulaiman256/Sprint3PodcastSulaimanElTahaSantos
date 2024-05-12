document.addEventListener("DOMContentLoaded", function () {
  fetch("./database/PodcastSulaimanElTahaSantos.xml")
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");

      const posts = xml.querySelectorAll("post");

      posts.forEach((post) => {
        // Obtener los datos del post
        let postId = post.getAttribute("id");
        let titulo = post.getAttribute("titulo");
        let descripcion = post.querySelector("descripcion").textContent;
        let imagen = post.querySelector("imagen").textContent;

        const container = document.querySelector(`.productoDetalle`);

        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const id = urlParams.get("id");

        if (id === postId) {
          container.innerHTML = `
            <style>
              .productoDetalle {
                text-align: center;
                max-width: 600px;
                margin: 25px auto 0; /* Agregamos un margen superior */
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 10px;
                
              }
        
              .productoDetalle img {
                max-width: 100%;
                border-radius: 5px;
                margin-bottom: 15px;
              }
        
              .productoDetalle h2 {
                font-size: 24px;
                color: #333;
                margin-bottom: 10px;
              }
        
              .productoDetalle p {
                font-size: 16px;
                color: #666;
                line-height: 1.5;
              }
            </style>
            <div class="productoDetalle">
              <h2>${titulo}</h2>
              <img src="${imagen}" alt="" />
              <p>${descripcion}</p>
            </div>
          `;
        }
      });
    })
    .catch((error) => {
      console.error("Error al obtener o procesar los datos del XML:", error);
    });
});
