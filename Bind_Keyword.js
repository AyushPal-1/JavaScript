function abcd(){
    console.log(this.age);
}

let obj = {
    age: 21
}

let bindFunc = abcd.bind(obj)
console.log(bindFunc());

