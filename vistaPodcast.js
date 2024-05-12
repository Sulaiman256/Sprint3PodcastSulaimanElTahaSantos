/*window.onload = function () {
  fetch("/database/PodcastSulaimanElTahaSantos.xml")
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");

      const posts = xml.querySelectorAll("post");

      const podcastList = document.getElementById("podcastList");
      posts.forEach((post) => {
        const titulo = post.getAttribute("titulo");
        let fecha = post.getAttribute("fecha");
        let autorNombre = post.querySelector("nombre").textContent;
        let introduccion = post.querySelector("introduccion").textContent;
        let descripcion = post.querySelector("descripcion").textContent;
        let tiempoLectura = post.querySelector("tiempo_lectura").textContent;
        let numVisualizaciones = post.querySelector(
          "num_visualizaciones"
        ).textContent;
        let numComentarios = post.querySelector("num_comentarios").textContent;
        let numLikes = post.querySelector("num_megusta").textContent;
        let imagen = post.querySelector("imagen").textContent;

        const podcast = document.createElement("div");
        podcast.classList.add("podcast");

        const img = document.createElement("img");
        img.src = imagen;
        img.alt = titulo;

        const podcastContent = document.createElement("div");
        podcastContent.classList.add("podcastContent");

        const h2 = document.createElement("h2");
        h2.textContent = titulo;

        const pFecha = document.createElement("p");
        pFecha.innerHTML = `<strong>Fecha:</strong> ${fecha}`;

        const pAutor = document.createElement("p");
        pAutor.innerHTML = `<strong>Autor:</strong> ${autorNombre}`;

        const pIntroduccion = document.createElement("p");
        pIntroduccion.innerHTML = `<strong>Introducción:</strong> ${introduccion}`;

        const pDescripcion = document.createElement("p");
        pDescripcion.innerHTML = `<strong>Descripción:</strong> ${descripcion}`;

        const pTiempoLectura = document.createElement("p");
        pTiempoLectura.innerHTML = `<strong>Tiempo de Lectura:</strong> ${tiempoLectura} minutos`;

        const pVisualizaciones = document.createElement("p");
        pVisualizaciones.innerHTML = `<strong>Número de Visualizaciones:</strong> ${numVisualizaciones}`;

        const pComentarios = document.createElement("p");
        pComentarios.innerHTML = `<strong>Número de Comentarios:</strong> ${numComentarios}`;

        const pLikes = document.createElement("p");
        pLikes.innerHTML = `<strong>Número de Me gusta:</strong> ${numLikes}`;

        const podcastActions = document.createElement("div");
        podcastActions.classList.add("podcastActions");

        const playLink = document.createElement("a");
        playLink.href = "#";
        playLink.innerHTML = `<i class="fas fa-play-circle"></i> Escuchar`;

        const infoLink = document.createElement("a");
        infoLink.href = "#";
        infoLink.innerHTML = `<i class="fas fa-info-circle"></i> Detalles`;

        podcastContent.appendChild(h2);
        podcastContent.appendChild(pFecha);
        podcastContent.appendChild(pAutor);
        podcastContent.appendChild(pIntroduccion);
        podcastContent.appendChild(pDescripcion);
        podcastContent.appendChild(pTiempoLectura);
        podcastContent.appendChild(pVisualizaciones);
        podcastContent.appendChild(pComentarios);
        podcastContent.appendChild(pLikes);

        podcastActions.appendChild(playLink);
        podcastActions.appendChild(infoLink);

        podcast.appendChild(img);
        podcast.appendChild(podcastContent);
        podcast.appendChild(podcastActions);

        podcastList.appendChild(podcast);
      });
    });
};
)*/
