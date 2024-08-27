let human = {
    name: "Ayush",
    canFly: false,
    canTalk: true
}

let Ayush = {
    solveJSquestion: true
}

Ayush.__proto__ = human

console.log(Ayush.name);