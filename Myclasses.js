class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}

const data = new User("Ayush", "ayush@gmail.com", "123")

console.log(data.encryptPassword());