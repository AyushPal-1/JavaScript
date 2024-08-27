// Immediately Invoked Function Expression

let ans = (function abcd(){
    let privateval = 12

    return {
        getter: function(){
            console.log(privateval);
        },
        setter: function(val){
            privateval = val;
        }
    }
})() 

ans.setter(32)
ans.getter()