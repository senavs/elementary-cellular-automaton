class Cell {
  
    constructor(index, row, weight, value) {
      this.index = index;
      this.row = row;
      this.weight = weight;
      this.value = value;
    }
    
    activate() {
      this.value = 1;
    }
    
    isActivated() {
      return this.value === 1;
    }
    
    draw() {
      // performace improviment: not drawing WHITE square in a WHITE background
      if (this.value === 0) {
        return;
      }
      
      noStroke()
      fill(255 - this.value * 255);
      square(this.index % N_CELL_ROW * this.weight, this.row * this.weight, this.weight);
    }
    
  }