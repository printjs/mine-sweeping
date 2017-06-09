import {Checkerboard} from './checkBoard';
import {createNineBox,mineConfig} from './config';
var style: any = require('./less/main');
var iconfont: any = require('./css/iconfont.css');

class mineClearance {
  private mine: Array < Array < object >> ;
  private waitDetection: Array < object > ;
  private detected:Array < object >;
  private keys: object;
  private level:string;
  constructor(type: string) {
    this.level = type;
    this.mine = new Checkerboard(type).checkBoard;
    this.waitDetection = new Array < object > ();
    this.detected = new Array < object > ();
    this.keys = {};
    this.initMine();
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
  private initMine() {
    document.oncontextmenu = (event)=>{
      window.event.returnValue=false;  
      return false; 
    }
    let root = document.getElementById('mineArea');
    root.style.cssText = "display:grid;grid-template-columns:repeat(" + this.mine[0].length + ",25px);grid-template-rows:repeat(" + this.mine.length + ",25px);grid-column-gap:4px;grid-row-gap:4px;"
    for (let i = 0, len = this.mine.length; i < len; i++) {
      for (let j = 0, len = this.mine[i].length; j < len; j++) {
        let div = document.createElement('div');
        div.setAttribute("val", this.mine[i][j]["message"] + "");
        div.setAttribute("x", i + "");
        div.setAttribute("y", j + "");
        div.classList.add(this.mine[i][j]["status"], "iconfont", "icon", "mine");
        //div.innerHTML = this.mine[i][j]["message"];
        div.onmousedown = (event) => {
          let mouse = event.button;
          if (mouse == 2) {
            if(this.rightClick(this.mine[i][j],div)){
              this.drawMine();
            } 
          } else if (mouse == 0) {
            if (this.leftClick(this.mine[i][j], div)) {
              this.drawMine();
            } else {
              alert("失败");
            }
          }
        }
        root.appendChild(div);
      }
    }
  }

  private leftClick(obj: object, div: any): boolean {
    let textInfo: string;
    if (obj["message"] == -1) {
      this.fail(obj,div);
      return false;
    }
    this.searchSafeArea(obj["x"], obj["y"]);
    return true;
  }

  private rightClick(obj:object,div:any):boolean{
    if(!div.classList.contains('flag')&&div.classList.contains('unknow')){
      div.classList.remove('unknow', 'flag', 'open', 'boom');
      div.classList.add("flag");
      div.innerHTML = "&#xe651;";
    }else if(div.classList.contains('flag')){
      div.classList.remove("flag");
      div.innerHTML = "";
    }
    return true;
  }

  private searchSafeArea(x: number, y: number): any {
    let newX: number;
    let newY: number;
    let temp: Array < object > = new Array < object > ();
    let obj: object = {};

    if (this.mine[x][y]["message"] > 0) {
      this.mine[x][y]["status"] = "open";
      return;
    }
    if (typeof this.mine[x] == "undefined") {
      return;
    }
    if (typeof this.mine[x][y] == "undefined") {
      return;
    }
    if (this.mine[x][y]["message"] == 0) {
      this.waitDetection.push({
        x: x,
        y: y
      })
      this.keys[x + "" + y] = x + "" + y;
      while (this.waitDetection.length > 0) {
        obj = this.waitDetection.shift();
        this.detected.push(obj);
        this.mine[obj["x"]][obj["y"]]["status"] = "open";
        temp = new createNineBox(obj["x"], obj["y"]).config;
        for (let val of temp) {
          if (typeof this.mine[val["x"]] == "undefined") {
            continue;
          }
          if (typeof this.mine[val["x"]][val["y"]] == "undefined") {
            continue;
          }
          if (!this.keys[val["x"] + "" + val["y"]] && this.mine[val["x"]][val["y"]]["message"] == 0) {
            this.waitDetection.push({
              x: val["x"],
              y: val["y"]
            })
            this.keys[val["x"] + "" + val["y"]] = val["x"] + "" + val["y"];
          }
        }
      }
    }
    while(this.detected.length>0){
      obj = this.detected.shift();
      console.log(obj["x"],obj["y"]);
      temp = new createNineBox(obj["x"], obj["y"]).config;
      for(let val of temp){
        if (typeof this.mine[val["x"]] == "undefined") {
          continue;
        }
        if (typeof this.mine[val["x"]][val["y"]] == "undefined") {
          continue;
        }   
        if (this.mine[val["x"]][val["y"]]["message"] >= 0 && this.mine[val["x"]][val["y"]]["status"]!="open") {
          this.mine[val["x"]][val["y"]]["status"] = "open";
        }     
      }
    }
  }

  private drawMine() {
    let success:number;
    let successDom:any;
    let allMine: any = document.getElementsByClassName('iconfont');
    let x: number = this.mine.length;
    let y: number = this.mine[0].length;
    let i: number = 0;
    let textInfo: string;
    for (let row of this.mine) {
      for (let col of row) {
        if (!allMine[i].classList.contains(col["status"])) {
          allMine[i].classList.remove('unknow', 'open', 'boom');
          allMine[i].classList.add(col["status"]);
          if (col["status"] == "open") {
            textInfo = col["message"] == 0 ? "" : col["message"] == -1 ? "&#xe610;" : col["message"]
            allMine[i].innerHTML = textInfo;
          }
        }
        i++;
      }
    }
    success = document.getElementsByClassName('unknow').length;
    if(success == new mineConfig(this.level).getMineNum()){
      let successDom = document.getElementsByClassName('unknow');
      for(let i = 0,len = successDom.length;i<len;i++){
        successDom[i].classList.add("boom");
        successDom[i].innerHTML = "&#xe651;";
      }
      alert("胜利");
    }
  }
  private fail(obj: object, div: any){
    let allMine: any = document.getElementsByClassName('iconfont');
    let i: number = 0;
    for (let row of this.mine) {
      for (let col of row) {
        if (col["message"] == -1) {
          allMine[i].innerHTML = "&#xe610;"
        }
        i++;
      }
    }
    div.classList.remove('unknow', 'flag', 'open', 'boom');
    div.classList.add("boom");
    div.innerHTML = "&#xe610;";
    obj["status"] == "boom";
  }
}
/**
 *       "primary":10,
      "intermediate":40,
      "senior":99
 */
new mineClearance("senior");