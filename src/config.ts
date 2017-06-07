export class nineParty{
  public config:Array<object>;
  constructor(x:number,y:number){
    this.config = [
      {
        x:x-1,
        y:y-1
      },
      {
        x:x-1,
        y:y       
      },
      {
        x:x-1,
        y:y+1      
      },
      {
        x:x,
        y:y-1      
      }, 
      {
        x:x,
        y:y+1      
      },  
      {
        x:x+1,
        y:y-1      
      },  
      {
        x:x+1,
        y:y      
      }, 
      {
        x:x+1,
        y:y+1      
      }      
    ];
  }

}