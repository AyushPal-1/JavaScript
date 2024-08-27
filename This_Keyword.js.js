// in global scope

console.log(this); // give window

// funtion scope

function abcd(){
    console.log(this); // give window
}

// method scope
// in any method "this" keyword always refer to parent object
let obj = {
    name: "Ayush",
    someMethod: function(){
        console.log(this.name);
    }
}
obj.someMethod();
