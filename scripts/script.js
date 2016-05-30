var sideCount = 16

function buildGrid(sideCount) {
	for (var i = 0; i < sideCount * sideCount; i++) {
		if (i % sideCount = 0) {
			$(document).ready(function{
				$('div.gridContainer').append('<div class="gridSquareEnd"></div>');
			})

		};
		else {
			$(document).ready(function{
				$('div.gridContainer').append('<div class="gridSquare"></div>');
			})
		}
	}