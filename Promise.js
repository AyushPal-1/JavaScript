// promiseOne
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
// promiseTwo
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
})
// promiseThree
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ayush", city: "Indore"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// promiseFour
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error)
            {
                resolve({username: "Ayush", password: "123"})
            }else{
                reject("Error:")
            }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is ether resolve and reject"))

// promiseFive
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error)
            {
                resolve({username: "javascript", password: "123"})
            }else{
                reject("Error: JS")
            }
    }, 1000)
})

async function consumePromiesFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiesFive()