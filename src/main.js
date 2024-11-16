const random = document.getElementById("text");
const roll = document.getElementById("roll");

function sort(remaining){
    if (remaining < 0) {
    random.style.opacity = "1";
    return;
    }
    random.innerText = Math.round(5 * Math.random() + 1);
    setTimeout(()=>sort(remaining - 1), 50);
}

roll.addEventListener("click", ()=>{
    random.style.opacity = "0.4";
    const audio = document.getElementById("dice-" + Math.round(3 * Math.random() + 1));
    audio.play();
    sort(25);
})

const lang = navigator.language || navigator.userLanguage;

if (lang == "pt-BR") {
roll.innerText = "🎲 Role os dados!"
} else {
roll.innerText = "🎲 Roll the dice!"
}