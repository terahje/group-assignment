// this page holds the functionality to get more information regarding a certain subject
var videoContainerEl = document.querySelector("#video-container");
var searchFormEl = document.querySelector("#search-subject-container");
var searchSubjectEl = document.querySelector("#subject");
var subjectButtonsEl = document.querySelector("#subject-buttons");
var modalContainerEl = document.querySelector("#modal-container");

var getVideo = function(searchSubject){
var apiKey = "AIzaSyC_ulDAOCSFzMHJohdo0uLmgt94TwOefOk";
var apiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&q=" + searchSubject + "&regionCode=US&relevanceLanguage=en&safeSearch=strict&key=" + apiKey;

    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                displayVideo(data);
            });
        } else {
            Swal.fire({
                title: "Please choose a subject.",
                confirmButtonText: "Return to Choices",
                confirmButtonColor: "#2e3374"
            })
        }
        
    })
        .catch(function(error){
            Swal.fire({
                title: "Oh No! We could not connect to the website.",
                confirmButtonText: "Close Window",
                confirmButtonColor: "#ec7705"
            })
            
        })
        
} // end getVideo function

// subject button handler
var subjectButtonHandler = function(event) {

    var searchSubject = event.target.getAttribute("data-subject");
    getVideo(searchSubject);
    videoContainerEl.textContent = "";
  
}

//displayVideo function
var displayVideo = function(data) {
    if(data.items.length === 0 ) {
        videoContainerEl.textContent = "No videos matched your search.";
        swal("We could not find any videos that matched your search");
        return;
    }
    //clear old content
    videoContainerEl.textContent = "";
    // searchSubjectEl.textContent= searchSubject;

    //video array
    var videos = data.items
    //video loop
    for (var i=0; i < videos.length; i++) {
        let vidId = videos[i].id.videoId;
        let vidTitle = videos[i].snippet.title;
        var videoUrl = "https://www.youtube.com/watch?v=" + vidId;
        
        var videoEl = document.createElement("a");
        videoEl.classList = "collection-item indigo-text text-darken-4";
        videoEl.setAttribute("href", videoUrl);
        videoEl.setAttribute("target", "_blank");
        var vidTitleEl = document.createElement("span");
        vidTitleEl.textContent = vidTitle;

        videoEl.appendChild(vidTitleEl);

        videoContainerEl.appendChild(videoEl);

    }
}

subjectButtonsEl.addEventListener("click", subjectButtonHandler);

