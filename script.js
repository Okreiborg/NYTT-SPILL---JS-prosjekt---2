let deg;
let dinScore = 0;
let motstander;
let motstanderScore = 0;

const seier = new Audio("lydeffekter/Cash.mp3")
const tap = new Audio("lydeffekter/buzzer.mp3")
const uavgjort = new Audio("lydeffekter/swoosh.mp3")
const vinner = new Audio("lydeffekter/applause.mp3")
const taper = new Audio("lydeffekter/loss.mp3")

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

    document.getElementById("ditt-valg").src = "";
    document.getElementById("motstander-valg").src = "";
    document.getElementById("valg").style.pointerEvents = "none"

    document.getElementById("ditt-valg").src = deg + ".png"
    
    motstander = valg[Math.floor(Math.random()* 3)];
    document.getElementById("motstander-valg").src = motstander + ".png"

    if (deg == motstander) {
        dinScore += 1;
        motstanderScore += 1;
        uavgjort.play();
    }
    else {
        if (deg == "Bilder/stein") {
            if (motstander == "Bilder/saks") {
                dinScore += 1;
                seier.play();
            }
            else if (motstander == "Bilder/papir") {
                motstanderScore += 1;
                tap.play();
            }
        }
        else if (deg == "Bilder/saks") {
            if (motstander == "Bilder/papir") {
                dinScore += 1;
                seier.play();
            }
            else if (motstander == "Bilder/stein") {
                motstanderScore += 1;
                tap.play();
            }
        }
        else if (deg == "Bilder/papir") {
            if (motstander == "Bilder/stein") {
                dinScore += 1;
                seier.play();
            }
            else if (motstander == "Bilder/saks") {
                motstanderScore += 1;
                tap.play();
            }
        }
        if (dinScore >= 10) {
            alert("Gratulerer du vant!")
        }
        else if (motstanderScore >= 10) {
            alert("Du tapte. Prøv på nytt")
        }
    }

    document.getElementById("din-score").innerText = dinScore;
    document.getElementById("motstander-score").innerText = motstanderScore
}   