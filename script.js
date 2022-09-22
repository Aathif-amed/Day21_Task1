//  let p = document.querySelector("h3").style.color = 'green';
let count = 1;
let printcount = setInterval(() => {
    console.log(count++);
    if (count == 11) {
        clearInterval(printcount)
    }
}, 1000)