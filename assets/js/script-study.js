// this page holds the functionality to get more information regarding a certain subject
var apiKey = "AIzaSyBazayZ5d6myGHgmOCHrCdFGmOwmy7KcOI";
var apiUrl = "https://www.googleapis.com/youtube/v3/search";
var playlistId = "";
var apiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&q=history&key=" + apiKey;
var vidId = "X4XKZ8irrYQ";
var youTubeUrl = "https://www.youtube.com/watch?v=" + vidId;


var getVideo = function(){
    fetch(apiUrl).then(function(response){
        return response.json();
        
    })
    .then(function(data){
        console.log(data);
        //once displayVideo is finished, we will call that here
    })
}

//displayVideo function


//if time we can have a watched video section???


getVideo();

