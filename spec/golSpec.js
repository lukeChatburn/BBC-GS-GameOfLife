describe('The rules', function(){
	var underpopulation = require('../script/gol')().underpopulation;
	var overcrowding = require('../script/gol')().overcrowding;

	it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', function (){
		expect(underpopulation(0,0)).toBe(0);
		expect(underpopulation(0,1)).toBe(0);
		expect(underpopulation(0,2)).toBe(0);
		expect(underpopulation(1,0)).toBe(0);
		expect(underpopulation(1,1)).toBe(0);
		expect(underpopulation(1,2)).toBe(1);
	});

	it('Any live cell that has more than three neighbours dies, as if caused by overcrowding.', function () {
		expect(overcrowding(0, 4)).toBe(0);
		expect(overcrowding(0, 5)).toBe(0);
		expect(overcrowding(0, 6)).toBe(0);
		expect(overcrowding(0, 7)).toBe(0);
		expect(overcrowding(0, 8)).toBe(0);
		expect(overcrowding(1, 4)).toBe(0);
		expect(overcrowding(1, 5)).toBe(0);
		expect(overcrowding(1, 6)).toBe(0);
		expect(overcrowding(1, 7)).toBe(0);
		expect(overcrowding(1, 8)).toBe(0);
	});
});

describe('Game', function (){
	var evolve = require('../script/gol')().evolve;

	it('can perform a simple evolution', function(){
		var initialState = [
			[0,0,0],
			[0,1,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});
});
