// REF
// https://mathworld.wolfram.com/ElementaryCellularAutomaton.html

// canvas config
const DIMENSION = 500;
const N_CELL_ROW = 200;
const CELL_WEIGHT = DIMENSION / N_CELL_ROW;
const TOTAL_ROWS = Math.floor(DIMENSION / CELL_WEIGHT);

// Elementary Cellular Automaton
let RULE = 30;

// 1d array, but printented as 2d
let cells;
let rule;

let currentRow = 0;

function setup() {
  createCanvas(DIMENSION, DIMENSION);
  
  // initialize first row
  cells = [...new Array(N_CELL_ROW)]
    .map((_, index) => new Cell(index, currentRow, CELL_WEIGHT, 0));
  cells[floor(N_CELL_ROW / 2)].activate();
  
  // rule
  rule = new Rule(RULE);
  
  // building each generation (each row)
  for (let row = 0; row < TOTAL_ROWS; row++) {
    const currGen = cells.slice(row * N_CELL_ROW, N_CELL_ROW * (row + 1));
    
    // next generation (row + 1)
    for (let i = 0; i < currGen.length; i++) {
      cells.push(rule.createNextGen(i, currGen));
    }
  }
}

function draw() {
  background(255);
  
  // draw board
  for (let i = 0; i < cells.length; i++) {
    cells[i].draw();
  }
  
  noLoop();
}