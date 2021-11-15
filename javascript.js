let max=1000;
let min=1;
let resultat = Math.floor(Math.random() * (max - min)) + min; 
let max2=200;
let min2=-200;
let resultat2 = Math.floor(Math.random() * (max2 - min2)) + min2; 
document.getElementById("p1").innerHTML ="Combien font " + (resultat/2+resultat2) + " + " + (resultat/2-resultat2) + " ?";
function reponse(){
    let reponse = document.getElementById("reponse").value;
    if(reponse!=resultat){
        document.getElementById("p2").innerHTML="FAUX";
    }
    else if(reponse==resultat){
        document.getElementById("p2").innerHTML="VRAI";
    }
}
function reload(){
    window.location.reload();
}
