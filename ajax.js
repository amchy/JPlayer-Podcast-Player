$(document).ready(function() {


    $.getJSON("getxml2.php?callback=?", {},function (json) 
	{
      
        new jPlayerPlaylist({
            jPlayer: "#jquery_jplayer_1",
            cssSelectorAncestor: "#jp_container_1"
        }, json, {
            swfPath: "js",
            supplied: "mp3",
            wmode: "window"
        });
    })
});