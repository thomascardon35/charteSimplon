"use strict"

var title = document.querySelectorAll(".title"); /* on selectionne toutes les div dont la classe est
"title" et la var title représente un tableau de ces div*/

for(var i = 0; i < title.length; i++){ /* on boucle "for" sur le tableau title */
   title[i].addEventListener("click", function(){ /* On crée un ecouteur d'evenements au click sur tous les elements du tableau title : ici les titres de nos blocs*/
      var result = this.nextElementSibling; /* on crée la variable result qui représente la propriété nextElementSiblig (l'element d'apres dans le HTML) de "this" ici l'element sur lequel on a cliqué */
      result.classList.toggle("active"); /* la propriété "classList" de "result" active ou desactive("toggle"),selon qu'il renvoie true ou false, la classe "active" qui renvoie "display:block" dans notre CSS */
   })
}
   