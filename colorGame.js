var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');

reset.addEventListener("click", function(){
	colors = generateRandomColors(6);
	picked = pickColor();
	colorDisplay.textContent = picked;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
})

colorDisplay.textContent = picked;

for (var i = 0; i < squares.length; i++){
	//add initial colors
	squares[i].style.backgroundColor = colors[i];
	//add click listeners
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === picked){
			messageDisplay.textContent = "Correct";
			changeColors(squares, picked);
			h1.style.backgroundColor = picked;
			reset.textContent = "Play Again";
		} else {
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	})	
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function pickColor(){
	return colors[Math.floor(Math.random() * squares.length)];
}

function changeColors(blocks, color){
	for(var i = 0; i < blocks.length; i++){
		console.log("h");
		blocks[i].style.backgroundColor = color;
	}
}