var i = 9;
var decompte = setInterval(function() {
  console.log(i--); // décompte de 10 à 1
}, 1000); // se lance toutes les secondes

var minuteur = setTimeout(function() {
  var d = new Date();
  var date = d.getHours() + ":" + d.getMinutes();
  alert("Après 10 secondes, il est " + date);
  clearInterval(decompte); // stoppe le décompte
}, 10000); // se lance après 10 secondes
var temps = 10;
setInterval(function() {
  (function(duree) {
    console.log(duree);}(temps--));
}, 1000);
