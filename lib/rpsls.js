// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
//copy code over from
export function rps(shot) {
    const hand = ["rock", "paper", "scissors"];

    if(shot == null){
        return{"player": hand[Math.floor(Math.random() * 3)]};
    }
    shot = shot.toLowerCase();
    const machine_choice = hand[Math.floor(Math.random() * 3)];
    var res;
    if(shot === machine_choice){
        res = "tie";
    } else if(shot === "rock" && machine_choice === "scissors" || shot === "paper" && machine_choice === "rock" || shot === "scissors" && machine_choice === "paper"){
        res = "win";
    } else if(shot === "rock" && machine_choice === "paper" || shot === "paper" && machine_choice === "scissors" || shot === "scissors" && machine_choice === "rock"){
        res = "lose";
    } else {
        console.error(`${shot} is out of range.`);
		throw new RangeError();
    }
    return {"player": shot, "opponent": machine_choice, "result": res};
}

export function rpsls(shot){
    const hand = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
    if(shot == null){
        return{"player": hand[Math.floor(Math.random() * 5)]};
    }

    shot = shot.toLowerCase();
    var machine_choice = hand[Math.floor(Math.random() * 5)];
    var res;

    if(!hand.includes(shot)){
        console.error(`${shot} is not a valid choice.`);
		throw new RangeError();
    }
    
    if(shot === machine_choice){
        res = "tie";
    } else if( hand === "rock" && (machine_choice === "scissors" || machine_choice === "lizard") ||  hand === "paper" && (machine_choice === "rock" || machine_choice === "spock") || hand === "scissors" && (machine_choice === "paper" || machine_choice === "lizard")){
        res = "win";
    } else if( hand === "lizard" && (machine_choice === "paper" || machine_choice === "spock") || hand === "spock" && (machine_choice === "scissors" || machine_choice === "rock")){
        res = "win";
    } else{
        res = "lose";
    }
    return {"player": shot, "opponent": machine_choice, "result": res};

}