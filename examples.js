let setNulltoZero = function (val) {
    if (val === null){
        return 0
    }else{
        return val
    }
    
}

let outOf100 = function (val) {
    if (val === null){
        return 0
    }else{
        let arr = val.split(":");
        return arr[0]/arr[1] * 100;
    }
    
}




const reverseString = (string) => {
    let array = string.split("");
    let left = 0;
    let right = array.length;
  
    while (left < right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
    let newString = array.join("")
    return newString
  };
  

  const reverseString = (string) => {
    let array = string.split("");
    let newArray=[];
    let loopTime= array.length
    for (let index = 0; index < loopTime; index++) {
      temp = array.pop();
      newArray.push(temp)
      }
    let newString = newArray.join("")
    return newString
  };
