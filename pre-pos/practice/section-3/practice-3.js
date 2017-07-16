
function countSameElements(collectionA,objectB) {
  let result=[];
   for(let i=0;i<collection.length;i++){
    let count=0;
    for(let j=i;j<collection.count;j++){
      if(collection[i]===collection[j]){
        count++;
      
      }
      else{
          if(collection[i].split("-")[0]===collection[j].split("-")[0]){
              count+=collection[j].split("-")[1]
          }
      }
    
    }
    
    
        result.push({key:collection[i],count:count});
        i=i+count-1;
    
  }
  for(let i=0;i<result.length;i++){
    for(let j=0;j<objectB.value.length;j++){
        if((result[i].key===objectB.value[j])&&result[i].count>=3){
          result[i].count=result[i].count-(result[i].count-((result[i].count%3))%3);
        }
    }
  }
  return  result;
}