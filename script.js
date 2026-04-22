console.log(
  "%cSTOP ! Tentative d'intrusion dans le Gateway de la Mercedes détectée...",
  "color: red; font-size: 20px; font-weight: bold;",
);
console.log("On plaisante. Bienvenue dans le code source du garage de Djidji.");

function showMore() {
  const hiddenArticles = document.querySelectorAll(".hidden-article");
  hiddenArticles.forEach((article) => {
    article.style.display = "block";
  });
  document.getElementById("btn-more").style.display = "none";
}
