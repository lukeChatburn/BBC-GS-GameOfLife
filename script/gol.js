module.exports = function(){
	function underpopulation(cellState, numberOfLiveNeighbours) {
		if (cellState === 1) {
			if (numberOfLiveNeighbours >= 0 && numberOfLiveNeighbours < 2) {
				return 0;
			}
		}
		else if(cellState === 0) {
			if (numberOfLiveNeighbours >= 0 && numberOfLiveNeighbours <= 2) {
				return 0;
			}
		}
		return 1;
	}

	function overcrowding(cellState, numberOfLiveNeighbours) {
		if(cellState === 1 || cellState === 0) {
			if(numberOfLiveNeighbours > 3) {
				return 0;
			}
		}
		return 1;
	}

	function survival(cellState, numberOfLiveNeighbours) {
		if(cellState === 1) {
			if(numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3) {
				return 1;
			}
		}
		return 0;
	}

	function evolve(gridState){
		var newState = [];
		return newState;
	}

	return {
		underpopulation: underpopulation,
		overcrowding: overcrowding,
		survival: survival,
		evolve: evolve
	};
};