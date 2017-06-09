export class createNineBox {
  public config: Array < object > ;
  constructor(x: number, y: number) {
    this.config = new Array < object > ();
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (x == x + i && y == y + j) {
          continue;
        }
        this.config.push({
          x: x + i,
          y: y + j
        })
      }
    }
  }
}

export class mineConfig{
  public level:string;
  public config:object;
  constructor(level:string){
    this.level = level;
    this.config = {
      "primary":10,
      "intermediate":40,
      "senior":99
    }
  }

  public getMineNum(){
    return this.config[this.level];
  }
}