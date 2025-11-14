// initialize scores
let homeScore = 0
let guestScore = 0

// get elements
let homeScoreEle = document.getElementById("home-score")
let guestScoreEle = document.getElementById("guest-score")

//get buttons
let add1Home = document.getElementById("add-1-home")
let add2Home = document.getElementById("add-2-home")
let add3Home = document.getElementById("add-3-home")

let add1Guest = document.getElementById("add-1-guest")
let add2Guest = document.getElementById("add-2-guest")
let add3Guest = document.getElementById("add-3-guest")

let reset = document.getElementById("reset")

// event listener
function eventListener(btn,event,funct) {
    btn.addEventListener(event, funct)
}

//highlight winner
function highlightWinner(){
    if (homeScore > guestScore) {
        homeScoreEle.style.border = "2px solid #f94f6d"
        guestScoreEle.style.border = null
        console.log("Home takes the lead")
    } else if  (guestScore > homeScore) {
        guestScoreEle.style.border = "2px solid #f94f6d"
        homeScoreEle.style.border = null
        console.log("Guest takes the lead")
    } else {
        homeScoreEle.style.border = null
        guestScoreEle.style.border = null
    }
    
}

//math
function addScore(team,num){
    switch (team) {
        case "home":
            homeScore += num;
            homeScoreEle.innerText = homeScore
            break;
        case "guest":
            guestScore += num;
            guestScoreEle.innerText = guestScore
            break;
    }
    highlightWinner()
}

// set home score to 0
function resetScore(){
    homeScore = 0
    guestScore = 0
    homeScoreEle.innerText = homeScore
    guestScoreEle.innerText = guestScore
    homeScoreEle.style.border = null
    guestScoreEle.style.border = null
}

// function time
resetScore()

eventListener(add1Home, "click", function() {addScore("home",1)})
eventListener(add2Home, "click", function() {addScore("home",2)})
eventListener(add3Home, "click", function() {addScore("home",3)})

eventListener(add1Guest, "click", function() {addScore("guest",1)})
eventListener(add2Guest, "click", function() {addScore("guest",2)})
eventListener(add3Guest, "click", function() {addScore("guest",3)})

eventListener(reset, "click", resetScore)