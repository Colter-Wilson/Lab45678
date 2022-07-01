function getFavoriteBoxer() {
    let favoriteBoxer = prompt('Who is your favorite boxer?');
    let message = "Hmmm, " + favoriteBoxer + ", that's a good one!";
    alert(message);
    document.getElementById('favorite-boxer').innerHTML = favoriteBoxer;
}

function getFavoriteColor() {
    let favoriteColor = prompt('What is your favorite color?');
    let message = "Hmmm, " + favoriteColor + ", that's a great color!";
    alert(message);
    if (favoriteColor == '') {
         prompt('Lets try that again... What is your favorite color?');
    }
    document.getElementById('favorite-color').innerHTML = favoriteColor;
}

getFavoriteBoxer()
getFavoriteColor()