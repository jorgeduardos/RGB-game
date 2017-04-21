
//initializing variables
var winner = "rgb("+rand(256)+", "+rand(256)+", "+rand(256)+")";
var easy = false;
var hard = true;
var extreme = false;
var impossible = false;
//selecting squares with class .hard cause is the deffault dificulty
var squares = document.querySelectorAll(".hard");
var diffBtns = document.querySelectorAll(".dificulty");
var resetBtn = document.querySelector("#reset");
var titleCont = document.querySelector(".titleContainer");


//callling palet to start the page with a new game
document.querySelector("#winnerColor").innerHTML = winner;
palet();


//adding event listeners
resetBtn.addEventListener("click", palet);

for (var i = 0; i < diffBtns.length; i++) {
	diffBtns[i].addEventListener("click", dificulty);
}

for (var i = 0; i < document.querySelectorAll(".square").length; i++) {
	document.querySelectorAll(".square")[i].addEventListener("click", picker);
}


/*****************************  FUNCTIONS *****************************/


// funtion to generate random number between specified range
function rand(between){
	var rand = Math.floor(Math.random() * between);
	return rand;
}


// game algorith logic (hides wrong selections, coverts all selection the same if you win)
function picker(){
	if(this.style.backgroundColor === winner){
		for (var i = 0; i < squares.length; i++) {
			if(squares[i] !== this){
				squares[i].style.visibility = "visible";
				squares[i].style.backgroundColor = winner;
				titleCont.style.backgroundColor = winner;
			}	
		}
	}
	else{
		this.style.visibility = "hidden";
	}
}


// function that creates the random color palet
function palet(){
	var winnerSquare = squares[rand(squares.length)];
	winner = "rgb("+rand(256)+", "+rand(256)+", "+rand(256)+")";
	document.querySelector("#winnerColor").innerHTML = winner;
	winnerSquare.style.backgroundColor = winner;
	for (var i = 0; i < squares.length; i++) {
		if(squares[i] !== winnerSquare ){
			squares[i].style.backgroundColor = "rgb("+rand(256)+", "+rand(256)+", "+rand(256)+")";
		}
	}
}


//function that sets the difficulty (hides and shows squares accordingly and resets the game)
function dificulty(){
	
	var squaresToShow = document.querySelectorAll(".impossible");
	var line2 = document.querySelectorAll(".line2");
	var line3 = document.querySelectorAll(".line3");
	var line4 = document.querySelectorAll(".line4")
	titleCont.style.backgroundColor = "#2ecc71";

	if(this.id === "easy"){
		document.querySelector(".container").style.maxWidth = "500px";
		for (var i = 0; i < line2.length; i++) {
			line2[i].style.display = "none";
			// line2[i].style.visibility = "hidden";
		}	
		squaresToShow = document.querySelectorAll(".easy");
		for (var i = 0; i < squaresToShow.length; i++) {
			squaresToShow[i].classList.remove("squareImpossible");
			squaresToShow[i].classList.add("square");
			squaresToShow[i].style.display = "inline-block";
		}
	}else if(this.id === "hard"){
		document.querySelector(".container").style.maxWidth = "500px";
		for (var i = 0; i < line3.length; i++) {
			line3[i].style.display = "none";
			// line3[i].style.visibility = "hidden";
		}
		squaresToShow = document.querySelectorAll(".hard");
		for (var i = 0; i < squaresToShow.length; i++) {
			squaresToShow[i].style.display = "inline-block";
			squaresToShow[i].classList.remove("squareImpossible");
			squaresToShow[i].classList.add("square");
			squaresToShow[i].style.display = "inline-block";
		}
	}else if(this.id === "extreme"){
		document.querySelector(".container").style.maxWidth = "500px";
		for (var i = 0; i < line4.length; i++) {
			line4[i].style.display = "none";
			// line4[i].style.visibility = "hidden";
		}
		squaresToShow = document.querySelectorAll(".extreme");
		for (var i = 0; i < squaresToShow.length; i++) {
			squaresToShow[i].style.display = "inline-block";
			squaresToShow[i].classList.remove("squareImpossible");
			squaresToShow[i].classList.add("square");
		}
	}else if(this.id === "impossible"){
		squaresToShow = document.querySelectorAll(".impossible");
		document.querySelector(".container").style.maxWidth = "100%";
		for (var i = 0; i < squaresToShow.length; i++) {
			squaresToShow[i].classList.remove("square");
			squaresToShow[i].classList.add("squareImpossible");
			squaresToShow[i].style.display = "inline-block";
		}

	}
	for (var i = 0; i < squaresToShow.length; i++) {
		if(squaresToShow[i].style.visibility === "hidden"){
			squaresToShow[i].style.visibility = "visible";
		}
	}
	squares = squaresToShow;
	palet();
}