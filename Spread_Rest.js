//    ... spread

var a = [1,2,3,4,5,6,7,8,9]
var b = [...a]
console.log(b);

//    ... rest

function abcd(a,b,c, ...d){
    console.log(a,b,c,d);
}

abcd(1,2,3,4,5,6)