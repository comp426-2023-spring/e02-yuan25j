// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function onPageLoad() {
    document.getElementById("shots").style.display = "none"
    document.getElementById("results").style.display = "none"
    document.getElementById("rules").style.display = "none"
    document.getElementById("shotImg").style.display = "none"
    document.getElementById("oppShotImg").style.display = "none"
    document.getElementById("shotImgLab").style.display = "none"
    document.getElementById("oppShotImgLab").style.display = "none"
}

function toggleShots() {
    let oppCheck = document.getElementById('opponent');
    let rpslsCheck = document.getElementById("rpsls");
    if (oppCheck.checked == true) {
        document.getElementById("shots").style.display = "block"
        if (rpslsCheck.checked == false) {
            document.getElementById("rpslsShots").style.display = "none"
        } else {
            document.getElementById("rpslsShots").style.display = "inline"
        }
    } else {
        document.getElementById("shots").style.display = "none"
    }
}

function startOver() {
    document.getElementById("input").reset()
    document.getElementById("shots").style.display = "none"
    document.getElementById("results").style.display = "none"
    document.getElementById("rules").style.display = "none"
    document.getElementById("shotImg").style.display = "none"
    document.getElementById("oppShotImg").style.display = "none"
    document.getElementById("shotImgLab").style.display = "none"
    document.getElementById("oppShotImgLab").style.display = "none"

}

function help() {
    if (document.getElementById("rules").style.display == "none") {
        document.getElementById("rules").style.display = "block";
    } else {
        document.getElementById("rules").style.display = "none";
    }
}

async function playGame () {
    let gameType = "rps"
    for (var x of document.getElementsByName("gameType")) {
        if (x.checked == true) { gameType = x.id }
    }
    
    let shot = "rock"
    for (var x of document.getElementsByName("shot")) {
        if (x.checked == true) { shot = x.id }
    }

    let baseurl = window.location.href.concat('app/')
    let url = baseurl.concat(gameType.concat('/play/'))

    let oppCheck = document.getElementById('opponent').checked
    if (oppCheck) { url = url.concat(shot) }

    let response = await fetch(url)
    let result = await response.json()

    resultString = 'You selected ' + result.player

    document.getElementById("shotImg").setAttribute("src", "img/"+result.player+".jpg");
    document.getElementById("shotImgLab").style.display = "block"
    document.getElementById("shotImg").style.display = "inline"
    document.getElementById("oppShotImg").style.display = "none"
    document.getElementById("oppShotImgLab").style.display = "none"

    if (oppCheck) {
        resultString = resultString + ' and your opponent selected ' + result.opponent + '. Result: ' + result.result;
        document.getElementById("oppShotImg").setAttribute("src", "img/"+result.opponent+".jpg");
        document.getElementById("oppShotImgLab").style.display = "block"
        document.getElementById("oppShotImg").style.display = "inline"
    }

    document.getElementById("results").innerText = resultString
    document.getElementById("results").style.display = "block"
}

// Inspiration take from mraymar45 at https://github.com/comp426-2023-spring/e02-mraymer45
