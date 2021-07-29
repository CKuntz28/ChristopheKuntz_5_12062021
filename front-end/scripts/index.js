main();

function main() {
  getArticles();
  // listenerCard();
}

// chargement articles API

function getArticles() {
  fetch("http://localhost:3000/api/teddies")
  .then (function(res){
      if(res.ok){
          return res.json();
      }
  })
  .then (function(articles){
          return (articles)
  })
  .catch (function(err){
      alert("Connexion serveur non effectué")
  })    

// caractèristique objet (array)
  .then(function (retourArray) {
      const articles = retourArray;
      console.log(articles);

      // création boucle
      for (let article in articles) {
        let boxObjet = document.createElement("div");
        document.querySelector(".nounours").appendChild(boxObjet);
        boxObjet.classList.add("nounour");

        let elementSource = document.createElement("a");
        boxObjet.appendChild(elementSource);
        elementSource.href = `product.html?id=${retourArray[article]._id}`;
        elementSource.classList.add("stretched-link");
        elementSource.dataset.id = retourArray[article]._id; 
        
        let ImgDiv = document.createElement("div");
        elementSource.appendChild(ImgDiv);
        ImgDiv.classList.add("objet__img");

        let ImgImg = document.createElement("img");
        ImgDiv.appendChild(ImgImg);
        ImgImg.src = retourArray[article].imageUrl;
       

        let TitreDiv = document.createElement("div");
        elementSource.appendChild(TitreDiv);
        TitreDiv.classList.add("objet__infos__titre");
        TitreDiv.innerHTML = retourArray[article].name;

        let NameDiv = document.createElement("div");
        elementSource.appendChild(NameDiv);
        NameDiv.classList.add("objet__infos");

        // end boucle   
      }
// end function getArticle et Fetch
 });
}


















// function listenerCard() {
//   const nounours = document.querySelectorAll(".nounour");
//   nounours.forEach((nounour) => {
//     nounour.addEventListener('click', event => {
//       const idNounour = nounour.querySelector(".stretched-link").dataset.id
//       window.id = "";
//       window.id = idNounour;
//     })
//   })
// }




