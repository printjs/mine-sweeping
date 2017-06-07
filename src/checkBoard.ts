/**
 * 扫雷的棋盘
 * author：wjt
 * date:2017/6/6
 * params @param{type}
 * ten 十个雷 棋盘大小8X8
 * forty 四十个雷 棋盘大小16X16
 * ninetyNine 九十九个雷 棋盘大小30X16
 */
import {nineParty} from './config';
export class Checkerboard{
  public checkBoard:Array<Array<object>>;
  private initObj:object;

  constructor(type:string){ 
    this.checkBoard = new Array<Array<object>>();
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
      this.checkBoard[i] = new Array<object>();
      for(let j = 0;j<y;j++){
        this.checkBoard[i][j] = {
          locate:i+''+j,
          x:i,
          y:j,
          message:0,
          status:"unknow"
        };
      }
    }
    for(let $index in mine){
      let nineparty = new nineParty(mine[$index].x,mine[$index].y).config;
      let arr:Array<object> = new Array<object>();

      for(let val of nineparty){
        arr.push({
          message:typeof this.checkBoard[val["x"]] == "undefined"?null:typeof this.checkBoard[val["x"]][val["y"]] == "undefined"?null:this.checkBoard[val["x"]][val["y"]]["message"],
          x:val["x"],
          y:val["y"]
        })
      }
      this.checkBoard[mine[$index].x][mine[$index].y]["message"] = -1;
      for(let val of arr){
        if(typeof val["message"]!="object"&&val["message"]!=-1){
          this.checkBoard[val["x"]][val["y"]]["message"] +=1;
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