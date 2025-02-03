function search(){

    let input = document.getElementById("input");

    let movieName = input.value;

    let  = document.getElementById("input");

    const htmlRequest = new XMLHttpRequest();

    let url = "http://www.omdbapi.com/?apikey=f61442c3&t="+movieName;

    htmlRequest.open("GET", url);

    htmlRequest.responseType = "json";

    htmlRequest.send();

    htmlRequest.onload = function() {
        let images = document.getElementById("mImage");
        images.src = htmlRequest.response.Poster;

        let title = document.getElementById("movieTitle");
        title.innerHTML = htmlRequest.response.Title;
    }
}

//search();