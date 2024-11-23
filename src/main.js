const random = document.getElementById("text");
const roll = document.getElementById("roll");

function sortDice(remaining) {
    if (remaining < 0) {
        random.style.opacity = "1";
        return;
    }
        random.innerText = Math.round(5 * Math.random() + 1);
        setTimeout(()=>sortDice(remaining - 1), 34);
}

function sortCoin(remaining) {
    if (remaining < 0) {
        random.style.opacity = "1";
        return;
    }
        random.innerText = Math.random() < 0.5 ? '❌' : '🍀';
        setTimeout(()=>sortCoin(remaining - 1), 34);
}

roll.addEventListener("click", ()=> {
    const mode = document.querySelector('.mode-selector input[type="radio"]:checked').value;

    random.style.opacity = "0.32";

    if (mode === "dice") {
        const audio = document.getElementById("dice-" + Math.round(3 * Math.random() + 1));
        audio.play();
        sortDice(20);
    } else if (mode === "coin") {
        const audio = document.getElementById("coin-flip");
        audio.play();
        sortCoin(20);
    } else {
        console.log("Mode not found 😨");
    }
})

const dice_label = document.querySelector('#dice-roll > span');
const coin_label = document.querySelector('#flip-a-coin > span');

const languages = {
    pt: {coin_button:"Cara ou Coroa", dice_button:"Girar os dados", roll_button:"Vamos lá!"}, 
    'pt-BR': {coin_button:"Cara ou Coroa", dice_button:"Girar os dados", roll_button:"Vamos lá!"},
    es: {coin_button:"Cara ou Coroa", dice_button:"Girar os dados", roll_button:"¡tira los dados!"},
    ru: {coin_button:"Cara ou Coroa", dice_button:"Girar os dados", roll_button:"бросьте кости!"},
    eo: "rulu la ĵetkubojn!",
    de: "Lass die Würfel rollen!",
    fr: "lancez les dés!",
    ko: "주사위를 굴려라!",
    ja: "サイコロを振る",
    zh: "掷骰子"
};

const lang = navigator.language || navigator.userLanguage;

roll.innerText = languages[lang].roll_button ?? "Roll the dice!";
dice_label.innerText = languages[lang].dice_button ?? "Dice Roll";
coin_label.innerText = languages[lang].coin_button ?? "Heads or Tails";