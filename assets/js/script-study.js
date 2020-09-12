// this page holds the functionality to get more information regarding a certain subject
var apiKey = "AIzaSyBazayZ5d6myGHgmOCHrCdFGmOwmy7KcOI";
var apiUrl = "https://www.googleapis.com/youtube/v3/search";
var playlistId = "";
var apiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&q=history&key=" + apiKey;
var vidId = "X4XKZ8irrYQ";
var youTubeUrl = "https://www.youtube.com/watch?v=" + vidId;


fetch(apiUrl).then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})

