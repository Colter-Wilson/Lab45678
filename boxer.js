let favoriteBoxer = prompt('Who is your favorite boxer?');
let message = "Hmmm, " + favoriteBoxer + ", that's a good one!";
alert(message);
document.getElementById('favorite-boxer').innerHTML = favoriteBoxer;