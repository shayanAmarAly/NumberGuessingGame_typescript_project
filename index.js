// import inquirer from "inquirer";
// // Command: tsc && node file.name (This command helps you to compile and run ts file simultaneously)
// type userInputType = {
//     user_Guess: number;
// }
// const random_number = Math.floor(Math.random() * 10);
// const user_Input : userInputType = await inquirer.prompt([
//     {
//         name: "user_Guess",
//         type: "number",
//         message: "Enter you number"
//     }
// ])
// // Object Destructuring
// const {user_Guess} = user_Input;
// console.log(`Your guess ${user_Guess} system generated number ${random_number}`)
// if (user_Guess == random_number) {
//     console.log("Hurray!! Your guess is absolutly correct \n YOU WIN")
// } else {
//     console.log("YOU lOSS \nT----Try again----")
// }
// var myFunction = f => {this.x = "x"};
function returns(a) {
    if (true) {
        return a && false;
    }
}
console.log(returns(true));
