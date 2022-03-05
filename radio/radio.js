var currentRadio = new Image;
var listRadios  = new Array() ;
initUrl();
	 
function selectStation(elem){
    var lecteur     = document.getElementById("lecteur");
    var afficheur   = document.getElementById("affichage");
    afficheur.innerHTML = elem.title;

    // on a cliqué sur la station en cours de lecture: affichage "pause" dans l'afficheur
    if (elem.title == currentRadio.title) {
        if (lecteur.paused) {
            lecteur.play();
            elem.className = "selected";
            afficheur.innerHTML = elem.title ;
        } else {
            lecteur.pause();
            elem.className = "selected paused";
            afficheur.innerHTML = elem.title + " / en pause";
        }
        return ;
    } 
    console.log(elem.title + " = " + listRadios[elem.title]) ;
    lecteur.src = listRadios[elem.title];
    lecteur.play();
    elem.className = "selected";    // on applique la classe "selected" sur la station sélectionnée
    currentRadio.className = "";    // on supprime la classe "selected" sur la précédente station
    currentRadio = elem ;     
}
function viewLecteur(afficheur) {
    var lecteur = document.getElementById("lecteur");
    if (lecteur.style.visibility == "hidden")
        lecteur.style.visibility = "" ;
    else
        lecteur.style.visibility = "hidden" ;
}
function initUrl(){
    listRadios["RTL"] = "http://streaming.radio.rtl.fr/rtl-1-44-128.mp3" ;
    listRadios["Nostalgie"] = "https://scdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3?origine=ubuntu_website.mp3" ;
    listRadios["RiresChansons"] = "https://f5-pa6.nrjaudio.fm/fr/30401/mp3_128.mp3?origine=ubuntu_website.mp3&cdn_path=audio_lbs12&access_token=18e40f6d7f7746288727279944fa7cb4" ;
    listRadios["Europe1"] = "http://ais-live.cloud-services.paris:8000/europe1.mp3" ;
    listRadios["OuiFM"] = "http://stream.ouifm.fr/ouifm-high.mp3" ;
    listRadios["SudRadio"] = "https://start-sud.ice.infomaniak.ch/start-sud-high.mp3" ; 
    listRadios["Fip"] = "http://direct.fipradio.fr/live/fip-midfi.mp3" ; 
    listRadios["CherieFM"] = "https://scdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3?origine=ubuntu_website.mp3" ; 
    listRadios["Africa"] = "https://african1paris.ice.infomaniak.ch/african1paris-128.mp3";
}