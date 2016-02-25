describe('The rules', function() {
	var underpopulation = require('../script/gol')().underpopulation;
	var overcrowding = require('../script/gol')().overcrowding;
	var survival = require('../script/gol')().survival;
	var creation = require('../script/gol')().creation;
	var nocells = require('../script/gol')().nocells;

	it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', function () {
		expect(underpopulation(0, 0)).toBe(0);
		expect(underpopulation(0, 1)).toBe(0);
		expect(underpopulation(0, 2)).toBe(0);
		expect(underpopulation(1, 0)).toBe(0);
		expect(underpopulation(1, 1)).toBe(0);
		expect(underpopulation(1, 2)).toBe(1);
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

	it('Any live cell that has two or three neighbours stays alive, as if caused by survival.', function () {
		expect(survival(1, 1)).toBe(0);
		expect(survival(1, 4)).toBe(0);
		expect(survival(1, 2)).toBe(1);
		expect(survival(1, 3)).toBe(1);
	});

	it('Any empty position has exactly three neighbouring cells, a cell is created in its position, as if caused by creation.', function () {
		expect(creation(0, 2)).toBe(0);
		expect(creation(0, 3)).toBe(1);
		expect(creation(0, 4)).toBe(0);
		expect(creation(1, 3)).toBe(1);
	});

	it('Any initial state with no live cells, when the game evolves the next state also has no live cells.', function () {
		expect(nocells(0, 0)).toBe(0);
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
		expect(evolve(initialState, 1)).toEqual(resultState);
	});

	it('can perform a different simple evolution', function(){
		var initialState = [
			[0,1,0],
			[0,1,0],
			[0,1,0]
		];

		var resultState = [
			[0,0,0],
			[1,1,1],
			[0,0,0]
		];
		expect(evolve(initialState, 1)).toEqual(resultState);
	});

	it('can perform multiple evolutions', function(){
		var initialState = [
			[0,0,0],
			[1,1,1],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[1,1,1],
			[0,0,0]
		];
		expect(evolve(initialState, 2)).toEqual(resultState);

	});

	it('can perform a dead cell evolution', function(){
		var initialState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];
		expect(evolve(initialState, 1)).toEqual(resultState);
	});
});

