'use strict';

function countSameElements(collection) {
  let result=[];
   for(let i=0;i<collection.length;i++){
    let count=0;
    for(let j=i;j<collection.count;j++){
      if(collection[i]===collection[j]){
        count++;
      
      }
      
    
    }
    
    
        result.push({key:collection[i],count:count});
        i=i+count-1;
    
  }
  return result;

}