let text = document.querySelector(".Text2");

let input = document.querySelector(".userIn");

let subBtn = document.querySelector(".subBtn");
let newBtn = document.querySelector(".Newgame");

var num = 10;

let arr = [];

let rndNum = Math.floor(Math.random() * 101);

let p1 = document.querySelector(".currGusess")
let p2 = document.querySelector(".allGuess")

const reloadFun = () => {
    newBtn.addEventListener("click", () => {
        location.reload();
    })
}



subBtn.addEventListener("click", () => {
    if (input.value == '') {
        alert("Fill input Box")
    } else {
        num -= 1;
        text.innerText = `You have ${num} guesses remaining.`
        arr.push(input.value);
        let val = parseInt(input.value)
        if (val == rndNum) {
            p1.innerText = `Win by ${10 - num} guess The num is ${val}`
            p2.innerText = `Your guess : ${arr}`
            subBtn.disabled = true;
            reloadFun();

        } else if (val < rndNum) {
            p1.innerText = `${val} is to Low`
            p2.innerText = `Your guess : ${arr}`

        } else if (val > rndNum) {
            p1.innerText = `${val} is to high`
            p2.innerText = `Your guess : ${arr}`
        }

    }
    input.value = "";
    if (num === 0) {
    location.reload();
}

})


