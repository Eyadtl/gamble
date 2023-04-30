// // // const Prompt = require("prompt-sync")();
// // const prompt1 = "100"
// // const prompt2 = "3"
// // const test = () => {
// //     const val = window.prompt("what is your bet");
// //     return val;
// // }

// // const value1 = window.prompt("what is your deposit");

// // const value2 = window.prompt("how many lines");
// // const value3 = window.prompt("what is your bet");

// // var myName = document.querySelectorAll("myText").value;
// // const x = () => {
// //     document.getElementById("myButton").onclick = function () {
// //         var myName = document.getElementById("myText").value;
// //         // console.log(myName)
// //         return myName;
// //     }
// // }
// // console.log(x())


// // const get = () => {
// //     if (document.getElementById("myButton").onclick()) {
// //         var myName = document.getElementById("myText").value;
// //         console.log(myName)
// //         return x=myName
// //     } else {
// //         console.log("you did not enter a value")
// //     }
// // }
// // get()
// // let x = document.createElement("p");
// // document.body.appendChild(x)


// const firstFunction = () => {
//     let x = document.querySelector("#myText").value
//     if (x == "") {
//         console.log("enter a value")
//     } else {
//         return x;
//     }
// }

// const getValue = () => {
//     let test = firstFunction();
//     return test;
// }
// const test1 = getValue()
// console.log(test1)
// const test = firstFunction()
// function test2(x) {
//     if (test = "") {
//         console.log("enter a value")

//     } else {
//         console.log(test)
//     }
// }
// function myFunction() {
//     document.getElementById("myButton").onclick
//     firstFunction()

// }
// const button = () => { document.getElementById("myButton").onclick(firstFunction()) }
// const y = firstFunction();
// console.log(y)

// function myFunction() {
//     let x = document.querySelector("#myText").value
//     if (x = "") {
//         console.log("enter a value")
//     } else {
//         let userInput = document.querySelector("#myText").value;
//         // console.log(userInput)
//         return userInput;
//     }
//     //     // let message = document.querySelector("#myButton");
//     //     // const x = document.createElement("p");
//     //     // // x.innerHTML = userInput;
//     //     // let ar = "";
//     //     // ar = userInput;
//     //     // // x.setAttribute("id", "test")
//     //     // // document.body.appendChild(x);
//     //     // // document.getElementById("test").style.visibility = "hidden";
//     //     // // console.log(ar)

// }

// const test = myFunction();
// console.log(test)

// // function test2(test) {
// //     if (test != "") {
// //         console.log("enter a valid valuye")
// //     } else {
// //         return test;
// //     }

// // }



// // let test1 = document.getElementById("test").value;
// // console.log(test1)


let inputValue;
let inputValue1;
let inputValue2;

const firstFunction = () => {
    let x = document.querySelector("#myText").value
    if (x == "") {
        console.log("enter a value")
    } else {
        return x;
    }
}
const secondFunction = () => {
    let x = document.querySelector("#myText1").value
    if (x == "") {
        console.log("enter a value")
    } else {
        return x;
    }
}
const thirdFunction = () => {
    let x = document.querySelector("#myText2").value
    if (x == "") {
        console.log("enter a value")
    } else {
        return x;
    }
}

const getValue = () => {
    return firstFunction();

}
const getValue1 = () => {
    return secondFunction();

}
const getValue2 = () => {
    return thirdFunction();

}

document.getElementById("myButton").addEventListener("click", function () {
    inputValue = getValue();
    inputValue1 = getValue1()
    inputValue2 = getValue2();
    console.log(inputValue);
    if (inputValue != undefined) {
        game()
    } else {
        console.log("wrong")
    }
    // use the inputValue variable in other functions
});


const ROWS = 3;
const COLS = 3;
const SYBMOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
};

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}
const deposit = () => {
    while (inputValue != undefined) {
        const depositAmount = inputValue;
        const numberDepositAmount = parseFloat(depositAmount);
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("YOU DID NOT ENTER A VALID NUMBER, TRY AGAIN")
            break;
        } else {
            return depositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (inputValue1 != undefined) {
        const lines = inputValue1 // Prompt("Enter number of lines: ");
        const numberOfLines = parseFloat(lines);
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("invalid number of lines")
            break;
        } else {
            return numberOfLines;
        }
    }
};



const betAmount = (balance, lines) => {
    while (inputValue2 != undefined) {
        const bet = inputValue2   //Prompt("Enter the amount you would like to bet: ");
        const betnumber = parseFloat(bet);
        if (isNaN(betnumber) || betnumber > balance / lines || betAmount <= 0) {
            console.log("enter a valid number of your account")
            break;
        } else {
            return betnumber;

        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYBMOLS_COUNT)) {
        for (i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    // console.log(symbols)
    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols]
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            // console.log(randomIndex);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
            // console.log(reels)
        }
    }
    // console.log(reels)
    return reels;
};

const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([])
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }
    // console.log(rows);
    return rows;

}

// const printrows = (rows) => {
//     for (const row of rows) {
//         let rowString = "";
//         for (const [i, symbol] of row.entries()) {
//             rowString += symbol;
//             if (i != row.length - 1) {
//                 rowString += " | "
//             }
//         }
//         console.log(rowString)
//     }
// }
function printrows(rows) {
    // const cont = document.createElement("h2");
    // cont.setAttribute("id", "contain");
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var rowString = "";
        for (var j = 0; j < row.length; j++) {
            var symbol = row[j];
            rowString += symbol;
            if (j != row.length - 1) {
                rowString += " | ";
            }
        }
        // console.log(rowString);
        // return rowString;
        // const cont = document.createElement("div");
        // cont.setAttribute("id", "contain")
        const test = document.createElement("p");
        test.innerText = rowString;
        const cont = document.getElementById("cont");
        cont.appendChild(test);
        // linebreak = document.createElement("br");
        // document.body.appendChild(linebreak);
    }
};

// const getwinings = (rows, bet, lines) => {
//     let winings = 0;
//     for (let row = 0; row < lines; row++) {
//         const symbols = rows[row];
//         let allSame = true;
//         for (const symbol of symbols) {
//             if (symbol != symbols[0]) {
//                 allSame = flase;
//                 break;
//             }
//         }
//         if (allSame) {
//             winings += bet * SYMBOLS_VALUES[symbols[0]]
//         }
//     }
// }
function getwinnings(rows, bet, lines) {
    var winnings = 0;
    for (var row = 0; row < lines; row++) {
        var symbols = rows[row];
        var allSame = true;
        for (var i = 1; i < symbols.length; i++) {
            if (symbols[i] !== symbols[0]) {
                allSame = false;
                break;
            }
        }
        if (allSame) {
            winnings += bet * SYMBOLS_VALUES[symbols[0]];
        }
    }
    return winnings;
}

// const game = () => {
//     let balance = deposit();
//     while (true) {
//         console.log("you balance is: $" + balance)
//         const lines = getNumberOfLines();
//         const bet = betAmount(balance, lines);
//         balance -= bet * lines;
//         const reels = spin();
//         const rows = transpose(reels);
//         printrows(rows);
//         const win = getwinnings(rows, bet, lines);
//         balance += win;
//         console.log("you won $" + win)
//         if (balance <= 0) {
//             break;
//         }
//     }
// }
const game = () => {
    let balance = deposit();
    const lines = getNumberOfLines();
    const bet = betAmount(balance, lines);
    balance -= bet * lines;
    const reels = spin();
    const rows = transpose(reels);
    printrows(rows);
    const win = getwinnings(rows, bet, lines);
    balance += win;
    // console.log("you won $" + win)
    const won = document.createElement("h2")
    won.innerHTML = ("your balance is $" + balance)
    document.body.appendChild(won);
    const final_balance = document.createElement("h2")
    final_balance.innerHTML = ("you won $" + win)
    document.body.appendChild(final_balance);

    // console.log("you balance is: $" + balance)

}


// game()

// // let balance = deposit();
// // const lines = getNumberOfLines();
// // const bet = betAmount(balance, lines);
// // const reels = spin();
// // const rows = transpose(reels);
// // printrows(rows);
// // const win = getwinnings(rows, bet, lines);
// // console.log("you won $" + win)
// // // const reels = spin();
// // // console.log(reels);
// // // console.log(rows)
// // // const test = printrows(rows);
// // // console.log(test)