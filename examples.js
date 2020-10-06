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
