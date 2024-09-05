
// Try and catch syntax
async function getAllUsers(){
    try {
        const reponse = await fetch('https://randomuser.me/api/')
        const data = await reponse.json()
        console.log(data);
    } catch (error) {
      console.log("E:", error);  
    }
}
getAllUsers()

// then and catch syntax
fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log("E:", error))



