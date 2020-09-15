var number = 1;

document.getElementById("1").style.display="block";

document.getElementById("suivant").addEventListener("click", function(){
    if(number < 5){
        number += 1;
        document.getElementById(number).style.display="block";
        document.getElementById(number - 1).style.display="none";
        document.getElementById("retour").className="button";
        console.log(number);
    }
    if(number==5){
        document.getElementById("suivant").className="button2";
        console.log("oui");
    }
});

document.getElementById("retour").addEventListener("click", function(){
    if(number > 1){
        number -= 1;
        document.getElementById(number).style.display="block";
        document.getElementById(number + 1).style.display="none";
        document.getElementById("suivant").className="button";
        console.log(number);
    }
    if(number == 1){
        document.getElementById("retour").className="button2";
        console.log("oui");
    }
});