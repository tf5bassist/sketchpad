$(document).ready(function() {
// Define vars and shit
var sideCount = 16;
var squareSize;
var	containerSize = $("#gridContainer").width();


/*	var containerSize = $("#gridContainer").ready(function() {
	$("#gridContainer").width()
*///});


// Figure out how big the squares should be based on #gridContainer width divided by number of grids on a side
// Triggered as soon as buildGrid runs
function determineSquareSize (sideCount) {
	console.log('Container size: ' + containerSize);
	squareSize = containerSize / sideCount;
	console.log('Square size: ' + squareSize);
	return squareSize;
};

function buildGrid(sideCount) {
	determineSquareSize(sideCount);
	
	for (var i = 1; i <= sideCount * sideCount; i++) {
		// var remainder = i % sideCount;
		// Removing if/else, no longer need a "return" square because CSS div CRLF is fucking dumb
/*		if (i % sideCount === 0) {
			$(document).ready(function() {
				$('#gridContainer').append('<div class="gridSquareEnd"></div>');
			});

		}
		else {
			$(document).ready(function() {
*/				
		$('#gridContainer').append("<div class='gridSquare'></div>");
		//	});
		//}
	}
	$('.gridSquare').css({"width": squareSize, "height": squareSize})
	$('.gridSquare').hover(function() {
		$(this).css("background-color", "red");
	})

};

buildGrid(sideCount);

$('#gridReset').click(function() {
	do {
		sideCount = prompt("Set new grid size by entering the number of squares on a side (more than 100 may be slow to load):", "Default: 16");
	}
	while (isNaN(sideCount) === true);

	$('.gridSquare').remove();
	buildGrid(sideCount);
})

});