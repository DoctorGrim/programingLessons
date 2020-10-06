let learner1 = {
    firstName: "Steven",
    lastName: "Handcock",
    scores: {
        s1q1:"5:8",
        s1q2:"9:10",
        s1q3: null,
        s1q4:"1:5",
        s1q5:"12:15",
        s2q1:"6:8",
        s2q2:null,
        s2q3:"4:20",
        s2q4:null,
        s3q1:null,
        s3q2:"6:10",
        s3q3:"7:7"
    }
}

const pullScores = function(obj, section = 1, callback) {
    let scores = {}
    for (let key in obj.scores) {
        if (key.includes('s' + section)){
            let val = obj.scores[key];
            if (typeof callback === "function") {
                val = callback(val)
            }
            scores[key] = val;
        }
    }
    return scores;
}

let outOf100 = function (val) {
    if (val === null){
        return 0
    }else{
        let arr = val.split(":");
        return arr[0]/arr[1]
    }
    
}


let newObj = pullScores(learner1, 1)
//let newObj = pullScores(learner1, 1, setNulltoZero)
// let newObj = pullScores(learner1, 1, outOf100)

console.log(newObj)






