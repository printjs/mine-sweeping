/**
 * 扫雷的棋盘
 * author：wjt
 * date:2017/6/6
 * params @param{type}
 * ten 十个雷 棋盘大小8X8
 * forty 四十个雷 棋盘大小16X16
 * ninetyNine 九十九个雷 棋盘大小30X16
 */
interface checkBoardInterface{
  
}

class Checkerboard{
  public checkBoard:Array<Array<number>>;
  private initObj:object;

  constructor(type:string){ 
    this.initObj = {
      "ten":(x:number = 8,y:number = 8):void => {
        this.checkBoard = this.initCheckBoard(x,y,this.createMine(x,y,10));
      },
      "forty":(x:number = 16,y:number = 16):void => {
        this.checkBoard = this.initCheckBoard(x,y,this.createMine(x,y,40));
      },
      "ninetyNine":(x:number = 30,y:number = 16):void => {
        this.checkBoard = this.initCheckBoard(x,y,this.createMine(x,y,99));
      }
    }
    this.initObj[type]();
  }

  private initCheckBoard = (x:number,y:number,mine:object):Array<Array<number>> =>{
    let temp:any = [];
    for(let i = 0;i<x;i++){
      let xTemp:Array<number> = [];
      for(let j = 0;j<y;j++){
        xTemp.push(0);
      }
      temp.push(xTemp);
    }
    console.log(temp);
    for(let $index in mine){
      let arr:Array<any> = [
        (()=>{
          if(temp[mine[$index].x-1]){
            return typeof temp[mine[$index].x-1][mine[$index].y-1] == "undefined"?null:temp[mine[$index].x-1][mine[$index].y-1]
          }else{
            return null;
          }
        })(),
        (()=>{
          if(temp[mine[$index].x-1]){
            return typeof temp[mine[$index].x-1][mine[$index].y] == "undefined"?null:temp[mine[$index].x-1][mine[$index].y-1]
          }else{
            return null;
          }
        })(),  
        (()=>{
          if(temp[mine[$index].x-1]){
            return typeof temp[mine[$index].x-1][mine[$index].y+1] == "undefined"?null:temp[mine[$index].x-1][mine[$index].y-1]
          }else{
            return null;
          }
        })(), 
        (()=>{
          if(temp[mine[$index].x]){
            return typeof temp[mine[$index].x][mine[$index].y-1] == "undefined"?null:temp[mine[$index].x][mine[$index].y-1]
          }else{
            return null;
          }
        })(), 
        (()=>{
          if(temp[mine[$index].x]){
            return typeof temp[mine[$index].x][mine[$index].y+1] == "undefined"?null:temp[mine[$index].x][mine[$index].y+1]
          }else{
            return null;
          }
        })(),  
        (()=>{
          if(temp[mine[$index].x+1]){
            return typeof temp[mine[$index].x+1][mine[$index].y-1] == "undefined"?null:temp[mine[$index].x+1][mine[$index].y-1]
          }else{
            return null;
          }
        })(), 
        (()=>{
          if(temp[mine[$index].x+1]){
            return typeof temp[mine[$index].x+1][mine[$index].y] == "undefined"?null:temp[mine[$index].x+1][mine[$index].y]
          }else{
            return null;
          }
        })(),  
        (()=>{
          if(temp[mine[$index].x+1]){
            return typeof temp[mine[$index].x+1][mine[$index].y+1] == "undefined"?null:temp[mine[$index].x+1][mine[$index].y+1]
          }else{
            return null;
          }
        })()     
        // temp[mine[$index].x-1]||typeof temp[mine[$index].x-1][mine[$index].y] == "undefined"?null:temp[mine[$index].x-1][mine[$index].y],
        // temp[mine[$index].x-1]||typeof temp[mine[$index].x-1][mine[$index].y+1] == "undefined"?null:temp[mine[$index].x-1][mine[$index].y+1],
        // temp[mine[$index].x]||typeof temp[mine[$index].x][mine[$index].y-1] == "undefined"?null:temp[mine[$index].x][mine[$index].y-1],
        // temp[mine[$index].x]||typeof temp[mine[$index].x][mine[$index].y+1] == "undefined"?null:temp[mine[$index].x][mine[$index].y+1],
        // temp[mine[$index].x+1]||typeof temp[mine[$index].x+1][mine[$index].y-1] == "undefined"?null:temp[mine[$index].x+1][mine[$index].y-1],
        // temp[mine[$index].x+1]||typeof temp[mine[$index].x+1][mine[$index].y] == "undefined"?null:temp[mine[$index].x+1][mine[$index].y],
        // temp[mine[$index].x+1]||typeof temp[mine[$index].x+1][mine[$index].y+1] == "undefined"?null:temp[mine[$index].x+1][mine[$index].y+1]
      ];
      temp[mine[$index].x][mine[$index].y] = -1;
      for(let i = 0,len = arr.length;i<len;i++){
        if(typeof arr[i]!="object"&&arr[i]!=-1){
          arr[i]+=1;
        }
      }
      console.log(arr);
    }
    return temp;
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

let test = new Checkerboard("ten");
console.log(test.checkBoard);