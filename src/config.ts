export class createNineBox {
  public nineBox: Array < object > ;
  constructor(x: number, y: number) {
    this.nineBox = new Array < object > ();
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (x == x + i && y == y + j) {
          continue;
        }
        this.nineBox.push({
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
  public standard:object;
  constructor(level:string){
    this.level = level;
    this.config = {
      "primary":10,
      "intermediate":40,
      "senior":99
    }
    this.standard = {
      "primary":{
        "height":8,
        "width":8
      },
      "intermediate":{
        "height":16,
        "width":16
      },
      "senior":{
        "height":16,
        "width":30
      }      
    }
  }

  public getMineNum(){
    return this.config[this.level];
  }

  public getMineStrandard(){
    return this.standard[this.level];
  }
}