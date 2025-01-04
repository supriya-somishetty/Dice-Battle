function play(){
    var p1=Math.floor(Math.random()*6+1);
    var p2=Math.floor(Math.random()*6+1);
    document.querySelector("#dice1 img").src="dice"+p1+".png";
    console.log("dice"+p1+".png");
    document.querySelector("#dice2 img").src="dice"+p2+".png";
    if(p1>p2){
        document.getElementById("result").innerHTML="Player 1 Wins!🚩";
    }
    else if(p2>p1){
        document.getElementById("result").innerHTML="Player 2 Wins!🚩";
    }
    else{
        document.getElementById("result").innerHTML="It's a Tie!";
    }
}