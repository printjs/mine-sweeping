import {Checkerboard} from './checkBoard';
import {nineParty} from './config';
var style:any = require('./less/main');

class mineClearance {
  private mine:Array<Array<object>>;
  private config:Array<object>;
  constructor(type:string){
    this.config = new Array<object>();
    this.mine = new Checkerboard(type).checkBoard;
    this.renderMine();
  }
  /**
   * this.mine 对象说明点
   * note: @param locate  雷区的坐标
   *       @param message 雷区的内容，是否有雷，和雷的数量
   *       @param status  unknow 为未打开的雷区
   *                      flag 为标记为雷的雷区
   *                      open 为已经开发的雷区
   *                      boom 触雷的状态，游戏结束
   */
  private renderMine (){
    let root = document.getElementById('mineArea');
    for(let i = 0,len = this.mine.length;i<len;i++){
      for(let j = 0,len = this.mine[i].length;j<len;j++){
        let div = document.createElement('div');
        div.setAttribute("val",this.mine[i][j]["message"]+"");
        div.setAttribute("x",i+"");
        div.setAttribute("y",j+"");
        div.setAttribute("class",this.mine[i][j]["status"]);
        div.onclick = () =>{
          if(!this.leftClick(this.mine[i][j])){
            alert("游戏结束");
          }
        }
        root.appendChild(div);
      }
    }
  }

  private leftClick(obj:object):boolean{
    if(obj["message"] == -1){
      obj["status"] == "boom";
      return false;
    }
    this.searchSafeArea(obj["x"],obj["y"]);
    return true;
  }

  private searchSafeArea(x:number,y:number):any{
    let nineparty:Array<object> = new nineParty(x,y).config;
    for(let val of nineparty){
      let x = val["x"];
      let y = val["y"];
      if(typeof this.mine[x]=="undefined"){
        return;
      }
      if(typeof this.mine[x][y] == "undefined"){
        return;
      }
      if(this.mine[x][y]["status"]=="flag"){
        console.log("进入status 是flag的判断");
      }else if(this.mine[x][y]["status"]!="flag"){
        console.log("进入status 不是flag的判断");
        if(this.mine[x][y]["message"]==-1){
          return;
        }
        if(this.mine[x][y]["message"]==0){
          this.mine[x][y]["status"] = "open"
          this.searchSafeArea(x,y)
        }
        if(this.mine[x][y]["message"]>0){
          this.mine[x][y]["status"] = "open"
          return
        }
      }else{
        alert("程序发生异常");
      }
    }

  }
}

new mineClearance("ninetyNine");
// console.log(test.mine);