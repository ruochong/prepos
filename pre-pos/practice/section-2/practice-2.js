
'use strict';

function countSameElements(collection) {
  let result=[];
   for(let i=0;i<collection.length;i++){
    let count=0;
    for(let j=i;j<collection.count;j++){
      if(collection[i]===collection[j]){
        count++;
      
      }
      else{
          if(collection[i].split("-")[0]=collection[j].split("-")[0]){
              count+=collection[j].split("-")[1]
          }
      }
    
    }
    
    
        result.push({key:collection[i],count:count});
        i=i+count-1;
    
  }
  return result;

}