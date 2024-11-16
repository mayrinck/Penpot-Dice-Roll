const random = document.getElementById("text");
const roll = document.getElementById("roll");

alert("1");

function sort(remaining){
    if (remaining < 0) {return}
    random.innerText = Math.round(5 * Math.random() + 1);
    setTimeout(sort(remaining - 1), 100);
}

roll.addEventListener("click", ()=>{
    sort(10);
})