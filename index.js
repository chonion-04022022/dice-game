var randomNum= Math.floor(Math.random()*6)+1;
var imgExt= "images/dice"+randomNum+".png";
var randomNum2= Math.floor(Math.random()*6)+1;
var imgExt2= "images/dice"+randomNum2+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgExt);
document.querySelectorAll("img")[1].setAttribute("src", imgExt2);

if (randomNum>randomNum2){
    document.querySelector("h1").innerHTML = "🎉🏆 Player1 Wins.";
}
else if (randomNum===randomNum2){
    document.querySelector("h1").innerHTML ="😪 Sorry Nobody gets to go home with the Trophy";
}
else{
    document.querySelector("h1").innerHTML="🎉🏆 Player2 Wins.";
}
