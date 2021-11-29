function RunCallback(a, b, cb) {

    var result = a + b 

    return cb(result) 
}

function cb(a){
    return a
}
module.exports = RunCallback;