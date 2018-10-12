function monMail() {
    document.location.href = "amandine.labaeye@gmail.com";
}

function Bouton1() {
    var x = document.getElementById('bouton1');
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('Bouton11').innerHTML='-';
    } else {
        x.style.display = "none";
        document.getElementById('Bouton11').innerHTML='+';
    }
}

function Bouton2() {
    var x = document.getElementById('bouton2');
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('Bouton22').innerHTML='-';
    } else {
        x.style.display = "none";
        document.getElementById('Bouton22').innerHTML='+';
    }
}

function Bouton3() {
    var x = document.getElementById('bouton3');
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('Bouton33').innerHTML='-';
    } else {
        x.style.display = "none";
        document.getElementById('Bouton33').innerHTML='+';
    }
}