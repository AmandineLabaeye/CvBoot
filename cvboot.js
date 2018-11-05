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
function bouton4 () {
    if (document.getElementById("Nom").value="")

    {alert("si  rien est ecrit .\n validé.")}
    else {
        alert("Ta oublié de remplir");

        if (document.getElementById("Prenom").value="")

        {alert("si  rien est ecrit .\n validé.")}
        else {
            alert("Ta oublié de remplir");

            if (document.getElementById("Email").value="")

            {alert ("si rien est ecrit .\n validé.")}
            else {
                alert("Ta oublié de remplir");

                if (document.getElementById("Message").value="")

                {alert("si rien est ecrit .\n validé.")}
                else {
                    alert("Ta oublié de remplir");
                }
        }
    }
}


}
