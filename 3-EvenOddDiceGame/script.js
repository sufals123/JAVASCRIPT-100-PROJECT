
let userSelection = "";

// select Even button
let evenButton = document.querySelector(".btn-Even")


evenButton.addEventListener("click", ()=>{


    userSelection = "even";
    diceRollButton.disabled = false

    evenButton.classList.add("btn-even-odd-select")
    oddButton.classList.remove("btn-even-odd-select")

    // remove animation
    document.querySelector(".img-dice").classList.remove("dice-spin")

    //reset cover img
    document.querySelector(".img-dice").src = `img/shutterstock_1140911045.png`;
})

// select Odd button
let oddButton = document.querySelector(".btn-Odd")
oddButton.addEventListener("click", ()=>{

    userSelection = "odd";
    diceRollButton.disabled = false

    oddButton.classList.add("btn-even-odd-select")
    evenButton.classList.remove("btn-even-odd-select")

    // remove animation
    document.querySelector(".img-dice").classList.remove("dice-spin")

     //reset cover img
     document.querySelector(".img-dice").src = `img/shutterstock_1140911045.png`;
})

// select dice roll button
let diceRollButton = document.querySelector(".dice-throw")
diceRollButton.disabled = true;


diceRollButton.addEventListener("click", ()=>{
    diceRollButton.disabled = true;
    let rs = Math.ceil(Math.random() * 6)
    console.log(rs)
    //apply annihilation
    document.querySelector(".img-dice").classList.add("dice-spin")
    //apply dice roll image
    setTimeout(()=>{
        document.querySelector(".img-dice").src = `img/dice-${rs}.png`;

        if(rs%2 == 0 && userSelection == "even"){
            document.querySelector(".result").innerHTML = "YOU WIN !! You selected even!!"
        }else if(rs%2 != 0 && userSelection == "odd"){
            document.querySelector(".result").innerHTML = "YOU WIN !! You selected odd!!"
        }else if(rs%2 == 0 && userSelection == "odd"){
            document.querySelector(".result").innerHTML = "YOU LOSE!! You selected odd!!"
        }else if(rs%2 != 0 && userSelection == "even"){
            document.querySelector(".result").innerHTML = "YOU LOSE!! You selected even!!"
        }
    },4000)
})