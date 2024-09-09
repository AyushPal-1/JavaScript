function outer(){
    let username = "Ayush"
    function inner(){
        console.log(`inner : ${username}`);
    }
    inner()
}
outer()