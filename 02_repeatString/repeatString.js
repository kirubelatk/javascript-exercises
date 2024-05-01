const repeatString = function(x,y) {
   let result=''
   if(y>0){
    for(let i=0;i<y;i++){
        result+=x
        }
        return result
   }
   else if(y === 0){
    return ""
   }
   else{
    return "ERROR"
   }
   
};


// Do not edit below this line
module.exports = repeatString;
