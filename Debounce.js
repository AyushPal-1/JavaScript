let inputElement = document.querySelector('input')
let debounce = (func, wait) => {
    let timmerId
    return(...args) => {
        clearInterval(timmerId)
        timmerId = setTimeout( () => func(...args), wait)
    }
}

let call = (e) => {
    console.log('calling', e.target.value);
}

let debouncedcall = debounce(call, 400)

inputElement.addEventListener('input', debouncedcall
)