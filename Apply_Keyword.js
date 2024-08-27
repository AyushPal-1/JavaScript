function abcd(val, val1){
    console.log(this.age, val,val1);
}

let obj = {
    age: 20
}

abcd.apply(obj, [2,3])