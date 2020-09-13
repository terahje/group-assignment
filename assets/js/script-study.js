// this page holds the functionality to get more information regarding a certain subject
var videoContainerEl = document.querySelector("#video-container");
var searchFormEl = document.querySelector("#search-subject-container");
var searchSubjectEl = document.querySelector("#subject");


var getVideo = function(searchSubject){
var apiKey = "AIzaSyC_ulDAOCSFzMHJohdo0uLmgt94TwOefOk";
var apiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&q=" + searchSubject + "&key=" + apiKey;
   
    
    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                displayVideo(data);
            });
        } else {
            alert("please choose a subject");
        }
        
    })
        .catch(function(error){
            alert("unable to connect to You Tube");
        })
        
} // end getVideo function

// subject Submit handler
var subjectSubmitHandler = function(event) {
   event.preventDefault();
   searchSubjectEl.textContent="";
   var searchSubject = searchSubjectEl.value.trim();
   if (searchSubject) {
       getVideo(searchSubject);
   } 
  
}

//displayVideo function
var displayVideo = function(data) {
    if(data.items.length === 0 ) {
        videoContainerEl.textContent = "No videos matched your search.";
        return;
    }
    //clear old content
    videoContainerEl.textContent = "";
    searchSubjectEl.textContent= subject;

    //video array
    var videos = data.items
    //video loop
    for (var i=0; i < videos.length; i++) {
        let vidId = videos[i].id.videoId;
        let vidTitle = videos[i].snippet.title;
        var youTubeUrl = "https://www.youtube.com/watch?v=" + vidId;
        console.log(vidId);
        console.log(vidTitle);
        console.log(youTubeUrl);

        // var videoTitleEl

    }


}

//if time we can have a watched video section???
searchFormEl.addEventListener("click", subjectSubmitHandler);



