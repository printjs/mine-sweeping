import {Checkerboard} from './checkBoard';
var style:any = require('./less/main');

class mineClearance {
  private mine:Array<Array<number>>;
  constructor(type:string){
    this.mine = new Checkerboard(type).checkBoard;
    this.renderMine();
  }

  private renderMine (){
    let root = document.getElementById('mineArea');
    for(let i = 0,len = this.mine.length;i<len;i++){
      for(let j = 0,len = this.mine[i].length;j<len;j++){
        let div = document.createElement('div');
        div.setAttribute("data-val",this.mine[i][j]+"");
        div.setAttribute("class","unknow");
        root.appendChild(div);
      }
    }
  }
}

new mineClearance("ninetyNine");
// console.log(test.mine);