const yesButton = document.querySelector('.yesbtn');
yesButton.addEventListener('click', function(){
  alert('TO BAD!!!')
});
const noButton = document.querySelector('.nobtn');
noButton.addEventListener('click', function(){
  alert('YAY!')
});
function changeImage() {

    if (document.querySelector(".pepe").src == "https://wallpapercave.com/wp/wp2132650.png")
    {
        document.querySelector(".pepe").src = "https://i1.kym-cdn.com/photos/images/facebook/001/218/293/848.png";
    }
    else
    {
        document.querySelector(".pepe").src = "https://wallpapercave.com/wp/wp2132650.png";
    }
};
function makeHappy(){
    document.querySelector(".sadpepe").src = "https://64.media.tumblr.com/ea4ca0f51b5081f5e8565accaeeb81dd/tumblr_ny1cp8ZbHP1ul80vfo1_1280.png";
}
