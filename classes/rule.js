class Rule {
  
    constructor(num) {
      this.bin = ("00000000" + num.toString(2)).slice(-8);
      this.reversedBinArr = this.bin.split("").map(e => parseInt(e));
    }
    
    createNextGen(index, currGen) {
      const len = currGen.length; 
      
      const state = currGen[index];
      const left = currGen[(index - 1 + len) % len];
      const right = currGen[(index + 1) % len];
      
      const nextGenValue = this.calculateNextValue(left, state, right);
      
      return new Cell(state.index + N_CELL_ROW, state.row + 1, state.weight, nextGenValue);
    }
    
    calculateNextValue(left, state, right) {
      const neighborBin = '' + left.value + state.value + right.value;
      const ruleIndex = 7 - parseInt(neighborBin, 2);
      return this.reversedBinArr[ruleIndex];
    }
  }