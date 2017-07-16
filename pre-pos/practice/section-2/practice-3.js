'use strict';

function countSameElements(collection) {
for(var i=0;i<collection.length;i++){
        if(collection[i].length==1){
           
            iteamList.push({key:tag[i],count:1});
        }
        else{
        if(collection[i].length>3)
            iteamList.push({key:collection[i],count:collection[i].length});
           else
           if(iteamList[i].indexof(':'!=-1))
           iteamList.push({key:collection[i].split(":")[0],count:Nmuber(collection[i].split(":")[1])});
           else
            iteamList.push({key:collection[i].split("-")[0],count:Nmuber(collection[i].split("-")[1])});
        
    }
  }
    var result=[];
    result[0]=iteamList[0];
    for(var j=1;j<iteamList.length;j++){
        var tag=0;

        for(var k=0;k<result.length;k++){
            if(iteamList[j].key===result[k].key){
                result[k].count+=iteamList[j].count;
                tag=1;
            }
            if(tag===0){
                result.push[{key:iteamList[i].key,conut:result[i].count}];
                
            }
        }
    }
    return result;
}
