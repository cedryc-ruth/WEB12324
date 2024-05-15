// Code from script.js
(function () {
  const movies = {
    movie01: {
      title: "The Covenant",
      description: "Lors de sa dernière mission en Afghanistan, le sergent John Kinley fait équipe avec l'interprète Ahmed pour arpenter la région. Lorsque leur unité tombe dans une embuscade au cours d'une patrouille, Kinley et Ahmed sont les seuls survivants. Alors que des combattants ennemis les poursuivent, Ahmed risque sa vie pour transporter Kinley, blessé, en sécurité. De retour sur le sol américain, Kinley apprend qu'Ahmed et sa famille n'ont pas obtenu la possibilité d'entrer aux Etats-Unis comme promis. Déterminé à protéger son ami et à rembourser sa dette, Kinley retourne dans la zone de guerre pour récupérer Ahmed et les siens",
      release_date: "23 juin 2023",
      image: "./img/films/theCovenant.jpg"
    },
    movie02: {
      title: "Pacific Rim",
      description: "Surgies des flots, des hordes de créatures monstrueuses venues d’ailleurs, les «Kaiju», ont déclenché une guerre qui a fait des millions de victimes et épuisé les ressources naturelles de l’humanité pendant des années. Pour les combattre, une arme d’un genre nouveau a été mise au point : de gigantesques robots, les «Jaegers», contrôlés simultanément par deux pilotes qui communiquent par télépathie grâce à une passerelle neuronale baptisée le «courant». Mais même les Jaegers semblent impuissants face aux redoutables Kaiju.\n\nAlors que la défaite paraît inéluctable, les forces armées qui protègent l’humanité n’ont d’autre choix que d’avoir recours à deux héros hors normes : un ancien pilote au bout du rouleau et une jeune femme en cours d’entraînement qui font équipe pour manoeuvrer un Jaeger d’apparence obsolète. Ensemble, ils incarnent désormais le dernier rempart de l’humanité contre une apocalypse de plus en plus imminente…",
      release_date: "17 juillet 2013",
      image: "./img/films/pacificRim.jpg"
    },
    movie03: {
      title: "Fury",
      description: "Avril 1945. LAvril 1945. Les Alliés mènent leur ultime offensive en Europe. À bord d’un tank Sherman, le sergent Wardaddy et ses quatre hommes s’engagent dans une mission à très haut risque bien au-delà des lignes ennemies. Face à un adversaire dont le nombre et la puissance de feu les dépassent, Wardaddy et son équipage vont devoir tout tenter pour frapper l’Allemagne nazie en plein cœur…",
      release_date: "22 octobre 2014",
      image: "./img/films/Fury.jpg"
    },
    movie04: {
      title: "Taken",
      description: "Que peut-on imaginer de pire pour un père que d'assister impuissant à l'enlèvement de sa fille via un téléphone portable ? C'est le cauchemar vécu par Bryan, ancien agent des services secrets américains, qui n'a que quelques heures pour arracher Kim des mains d'un redoutable gang spécialisé dans la traite des femmes. Premier problème à résoudre : il est à Los Angeles, elle vient de se faire enlever à Paris.",
      release_date: "27 février 2008",
      image: "./img/films/taken.jpg"
    },
    movie05: {
      title: "Equalizer",
      description: "Pour McCall, la page était tournée. Il pensait en avoir fini avec son mystérieux passé. Mais lorsqu’il fait la connaissance de Teri, une jeune fille victime de gangsters russes violents, il lui est impossible de ne pas réagir. Sa soif de justice se réveille et il sort de sa retraite pour lui venir en aide. McCall n’a pas oublié ses talents d’autrefois…\n\nDésormais, si quelqu’un a un problème, si une victime se retrouve devant des obstacles insurmontables sans personne vers qui se tourner, McCall est là. Il est l’Equalizer",
      release_date: "01 octobre 2014",
      image: "./img/films/equalizer.jpg"
    },
    movie06: {
      title: "Edge Of Tomorrow",
      description: "Dans un futur proche, des hordes d'extraterrestres ont livré une bataille acharnée contre la Terre et semblent désormais invincibles: aucune armée au monde n'a réussi à les vaincre. Le commandant William Cage, qui n'a jamais combattu de sa vie, est envoyé, sans la moindre explication, dans ce qui ressemble à une mission-suicide. Il meurt en l'espace de quelques minutes et se retrouve projeté dans une boucle temporelle, condamné à revivre le même combat et à mourir de nouveau indéfiniment",
      release_date: "4 juin 2014",
      image: "./img/films/edgeOfTomorrow.jpg"
    }
  }
  console.log(movies);

  // listen to data panel
  document.addEventListener("click", event => {
    if (event.target.matches(".btn-show-movie")) {
      const id=(event.target.dataset.id)
      console.log(movies[id].title);

      showMovie(id);
      console.log(id);
    }
  });
  function showMovie(data) {
    // get elements
    const modalTitle = document.getElementById("show-movie-title");
    const modalImage = document.getElementById("show-movie-image");
    const modalDate = document.getElementById("show-movie-date");
    const modalDescription = document.getElementById("show-movie-description");

    // insert data into modal ui
    modalTitle.textContent = movies[data].title;
    modalImage.innerHTML = `<img src="${movies[data].image
      }" class="img-fluid" alt="Responsive image">`;
    modalDate.textContent = `date de sortie : ${movies[data].release_date}`;
    modalDescription.textContent = `${movies[data].description}`;
  };


})();