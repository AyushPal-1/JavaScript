let ans = new Promise((resolve, reject) => {
    if (false) {
        return resolve()
    }
    return reject()
})

ans
.then(function(data){
    console.log("resolve");
})
.catch(function(data){
    console.log("Reject");
})
