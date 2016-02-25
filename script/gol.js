module.exports = function(){
	function underpopulation(cellState, numberOfLiveNeighbours) {
		if (cellState === 1) {
			if (numberOfLiveNeighbours >= 0 && numberOfLiveNeighbours < 2) {
				return 0;
			}
		}
		else if(cellState === 0) {
			if (numberOfLiveNeighbours > 0 && numberOfLiveNeighbours <= 2) {
				return 0;
			}
		}
		return overcrowding(cellState, numberOfLiveNeighbours);
	}

	function overcrowding(cellState, numberOfLiveNeighbours) {
		if(cellState === 1 || cellState === 0) {
			if(numberOfLiveNeighbours > 3) {
				return 0;
			}
		}
		return survival(cellState, numberOfLiveNeighbours);
	}

	function survival(cellState, numberOfLiveNeighbours) {
		if(cellState === 1) {
			if(numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3) {
				return 1;
			}
		}
		return creation(cellState, numberOfLiveNeighbours);
	}

	function creation(cellState, numberOfLiveNeighbours) {
		if(cellState === 0) {
			if(numberOfLiveNeighbours === 3) {
				return 1;
			}
		}
		return nocells(cellState, numberOfLiveNeighbours);
	}

	function nocells(cellState, numberOfLiveNeighbours) {
		if(cellState === 0 && numberOfLiveNeighbours === 0) {
			return 0;
		}
		return underpopulation(cellState, numberOfLiveNeighbours);
	}

	function evolve(gridState, numberOfEvolutions){
		var evolutions = (numberOfEvolutions-1);
		var initialState = gridState;
		var newState = [];
		var cellNumber = [];
		var neighbourArray = [];
		var cell = null;
		var index = 0;

		for(var i = 0; i < initialState.length; i++) {
			for(var j = 0; j < initialState[i].length; j++) {
				cellNumber.push(initialState[i][j]);
			}
		}

		neighbourArray.push((cellNumber[1] + cellNumber[3] + cellNumber[4]));
		neighbourArray.push((cellNumber[0] + cellNumber[2] + cellNumber[3] + cellNumber[4] + cellNumber[5]));
		neighbourArray.push((cellNumber[1] + cellNumber[4] + cellNumber[5]));
		neighbourArray.push((cellNumber[0] + cellNumber[1] + cellNumber[4] + cellNumber[6] + cellNumber[7]));
		neighbourArray.push((cellNumber[0] + cellNumber[1] + cellNumber[2] + cellNumber[3] + cellNumber[5] + cellNumber[6] + cellNumber[7] + cellNumber[8]));
		neighbourArray.push((cellNumber[1] + cellNumber[2] + cellNumber[4] + cellNumber[7] + cellNumber[8]));
		neighbourArray.push((cellNumber[3] + cellNumber[4] + cellNumber[7]));
		neighbourArray.push((cellNumber[3] + cellNumber[4] + cellNumber[5] + cellNumber[6] + cellNumber[8]));
		neighbourArray.push((cellNumber[4] + cellNumber[5] + cellNumber[7]));

		for(var k = 0; k < initialState.length; k++) {
			newState.push([]);
			for(var l = 0; l < initialState[k].length; l++) {
				cell = underpopulation(initialState[k][l], neighbourArray[index]);
				newState[k].push(cell);
				index++;
			}
		}

		if(evolutions > 0) {
			return evolve(newState, evolutions);
		}else {
			return newState;
		}
	}

	return {
		underpopulation: underpopulation,
		overcrowding: overcrowding,
		survival: survival,
		creation: creation,
		nocells: nocells,
		evolve: evolve
	};
};