/**
 * 扫雷的棋盘
 * author：wjt
 * date:2017/6/6
 * params @param{type}
 * ten 十个雷 棋盘大小8X8
 * forty 四十个雷 棋盘大小16X16
 * ninetyNine 九十九个雷 棋盘大小30X16
 */
export class Checkerboard{
  public checkBoard:Array<Array<number>>;
  private initObj:object;

  constructor(type:string){ 
    this.checkBoard = new Array<Array<number>>();
    this.initObj = {
      "ten":(x:number = 8,y:number = 8):void => {
        this.initCheckBoard(x,y,this.createMine(x,y,10));
      },
      "forty":(x:number = 16,y:number = 16):void => {
        this.initCheckBoard(x,y,this.createMine(x,y,40));
      },
      "ninetyNine":(x:number = 30,y:number = 16):void => {
        this.initCheckBoard(x,y,this.createMine(x,y,99));
      }
    }
    this.initObj[type]();
  }

  private initCheckBoard = (x:number,y:number,mine:object) =>{
    for(let i = 0;i<x;i++){
      this.checkBoard[i] = new Array<number>();
      for(let j = 0;j<y;j++){
        this.checkBoard[i][j] = 0;
      }
    }
    for(let $index in mine){
      let arr:object;
      arr = {
        1:{
          message:typeof this.checkBoard[mine[$index].x-1] == "undefined"?null:typeof this.checkBoard[mine[$index].x-1][mine[$index].y-1] == "undefined"?null:this.checkBoard[mine[$index].x-1][mine[$index].y-1],
          x:mine[$index].x-1,
          y:mine[$index].y-1
        },
        2:{
          message:typeof this.checkBoard[mine[$index].x-1] == "undefined"?null:typeof this.checkBoard[mine[$index].x-1][mine[$index].y] == "undefined"?null:this.checkBoard[mine[$index].x-1][mine[$index].y],
          x:mine[$index].x-1,
          y:mine[$index].y
        },
        3:{
          message:typeof this.checkBoard[mine[$index].x-1] == "undefined"?null:typeof this.checkBoard[mine[$index].x-1][mine[$index].y+1] == "undefined"?null:this.checkBoard[mine[$index].x-1][mine[$index].y+1],
          x:mine[$index].x-1,
          y:mine[$index].y+1
        },
        4:{
          message:typeof this.checkBoard[mine[$index].x] == "undefined"?null: typeof this.checkBoard[mine[$index].x][mine[$index].y-1] == "undefined"?null:this.checkBoard[mine[$index].x][mine[$index].y-1],
          x:mine[$index].x,
          y:mine[$index].y-1
        },
        5:{
          message:typeof this.checkBoard[mine[$index].x] == "undefined"?null:typeof this.checkBoard[mine[$index].x][mine[$index].y+1] == "undefined"?null:this.checkBoard[mine[$index].x][mine[$index].y+1],
          x:mine[$index].x,
          y:mine[$index].y+1
        },
        6:{
          message:typeof this.checkBoard[mine[$index].x+1] == "undefined"?null:typeof this.checkBoard[mine[$index].x+1][mine[$index].y-1] == "undefined"?null:this.checkBoard[mine[$index].x+1][mine[$index].y-1],
          x:mine[$index].x+1,
          y:mine[$index].y-1
        },
        7:{
          message:typeof this.checkBoard[mine[$index].x+1] == "undefined"?null:typeof this.checkBoard[mine[$index].x+1][mine[$index].y] == "undefined"?null:this.checkBoard[mine[$index].x+1][mine[$index].y],
          x:mine[$index].x+1,
          y:mine[$index].y          
        },
        8:{
          message:typeof this.checkBoard[mine[$index].x+1] == "undefined"?null:typeof this.checkBoard[mine[$index].x+1][mine[$index].y+1] == "undefined"?null:this.checkBoard[mine[$index].x+1][mine[$index].y+1],
          x:mine[$index].x+1,
          y:mine[$index].y+1          
        }

      };
      this.checkBoard[mine[$index].x][mine[$index].y] = -1;
      for(let $index in arr){
        if(typeof arr[$index].message!="object"&&arr[$index].message!=-1){
          this.checkBoard[arr[$index].x][arr[$index].y] +=1;
        }
      }
    }
  }

  private createMine = (x:number,y:number,amount:number):object =>{
    let temp:object = new function(){};
    let condition:number = amount;
    let arr = Object.keys(temp);
    let count = arr.length;
    let m:number;
    let n:number;
    while(count < condition){
      m = Math.floor(Math.random()*(x-1));
      n = Math.floor(Math.random()*(y-1));
      temp[m+''+n] = {
        x:m,
        y:n
      }
      arr = Object.keys(temp);
      count = arr.length;
    }
    return temp;
  }
}