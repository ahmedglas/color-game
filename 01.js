var numsquares=6;
var colors = generateRandomColors(numsquares);

var squares = document.querySelectorAll(".square");
var pickedcolor = pick1Color ();
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

colordisplay.textContent = pickedcolor ;

for(var i=0 ;i<squares.length;i++){
	squares[i].style.background= colors[i];

squares[i].addEventListener("click",function(){
var clickedcolor = this.style.background;
console.log(clickedcolor , pickedcolor);
if ( clickedcolor === pickedcolor){ 
//squares[i].style.background = colors[3];
messageDisplay.textContent = "Correct!";
changeColors(clickedcolor);
reset.textContent="Play Again?"
h1.style.background= clickedcolor ;
}
else{
	this.style.background = "#232323";
	messageDisplay.textContent="Try Again";
}

});
}

function pick1Color() {
var random = Math.floor( Math.random() * colors.length); 
return colors[random];
}


function changeColors(colors){

for (var i =0; i<squares.length;i++){

	squares[i].style.background = colors ; 
} 
}
function generateRandomColors(num){
var arr =[]
for (var i =0; i<num; i++){
	arr.push(randomColor());

}
return arr;}

function randomColor(){

	var r=Math.floor(Math.random() *256);
var g=Math.floor(Math.random() *256);
var b=Math.floor(Math.random() *256);
return "rgb(" + r +", " + g + ", " + b + ")";
}
reset.addEventListener("click",function(){
colors = generateRandomColors(numsquares);
pickedcolor = pick1Color ();
colordisplay.textContent=pickedcolor;
for(var i=0 ;i<squares.length;i++){
	squares[i].style.background= colors[i];
}
	h1.style.background =  "steelblue"; 
	reset.textContent="new color";
messageDisplay.textContent = "";

})
easy.addEventListener("click",function(){
numsquares=3;
hard.classList.remove("selected");

easy.classList.add("selected");
colors = generateRandomColors(numsquares);
pickedcolor = pick1Color ();
colordisplay.textContent=pickedcolor;
for(var i=0 ; i<squares.length;i++){
if(colors[i]){
	squares[i].style.background = colors[i];
}
else
{
	squares[i].style.display = "none";
}

}

messageDisplay.textContent = "";
reset.textContent="new color";
h1.style.background =  "steelblue"; 
})
hard.addEventListener("click",function(){
numsquares=6;
easy.classList.remove("selected");
hard.classList.add("selected");
colors = generateRandomColors(numsquares);
pickedcolor = pick1Color ();
colordisplay.textContent=pickedcolor;
for(var i=0 ; i<squares.length;i++){
squares[i].style.background = colors[i];


	squares[i].style.display = "block";

}messageDisplay.textContent = "";
reset.textContent="new color";
h1.style.background =  "steelblue"; 
})