let deg;
let dinScore = 0;
let motstander;
let motstanderScore = 0;

const valg = ["Bilder/stein", "Bilder/saks", "Bilder/papir"]

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        const valget = document.createElement("img");
        valget.id = valg[i];
        valget.src = valg[i] + ".png"
        valget.addEventListener("click", velgValget)
        document.getElementById("valg").append(valget)
    }
}

function velgValget() {
    deg = this.id
    document.getElementById("ditt-valg").src = deg + ".png"
    
    motstander = valg[Math.floor(Math.random()* 3)];
    document.getElementById("motstander-valg").src = motstander + ".png"

    if (deg == motstander) {
        dinScore += 1;
        motstanderScore += 1;
    }
    else {
        if (deg == "Bilder/stein") {
            if (motstander == "Bilder/saks") {
                dinScore += 1;
            }
            else if (motstander == "Bilder/papir") {
                motstanderScore += 1;
            }
        }
        else if (deg == "Bilder/saks") {
            if (motstander == "Bilder/papir") {
                dinScore += 1;
            }
            else if (motstander == "Bilder/stein") {
                motstanderScore += 1;
            }
        }
        else if (deg == "Bilder/papir") {
            if (motstander == "Bilder/stein") {
                dinScore += 1;
            }
            else if (motstander == "Bilder/saks") {
                motstanderScore += 1;
            }
        }
    }

    document.getElementById("din-score").innerText = dinScore;
    document.getElementById("motstander-score").innerText = motstanderScore
}   