
const removeFromArray = function (array, ...args) {
    let newArray = [];

     array.forEach((ele) => {
      if(!args.includes(ele)){  
        newArray.push(ele)
    }});
return newArray
}

// Do not edit below this line
module.exports = removeFromArray;
