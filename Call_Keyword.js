function abcd(val, val1){
    console.log(this.age, val,val1);
}

let obj = {
    age: 20
}

abcd.call(obj,1,3)