function embedVideo() {
    var height = window.screen.height * 0.75;
    var width = window.screen.width * 0.75;

    var videoUrl = document.getElementById('videoUrl').value;
    var videoId = extractVideoId(videoUrl);

    if (videoId) {
        var embedCode = '<iframe width="'+ width +'" height="'+ height +'" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
        document.getElementById('player').innerHTML = embedCode;
        document.getElementById('title').innerHTML = "";
    } else {
        alert('The YouTube link you entered is not valid.');
    }

}

function restart(){
    location.reload();
}

function extractVideoId(url) {
    // Alterar a expressão regular para incluir os shorts
    var regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=|shorts\/)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[1].length === 11) ? match[1] : null;
}


