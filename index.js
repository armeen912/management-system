#! /usr /bin/enr/node
import inquirer from "inquirer";
const randomNumber = Math.floor(100000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name :",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value .";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select the courses to enrolled",
        choices: ["Ms.office", "HTML", "Javascript", "Typescript", "Python"]
    }
]);
const Tutionfee = {
    "Ms.office": 2000,
    "HTML": 2500,
    "Javascript": 3000,
    "Typescript": 4000,
    "python": 7000,
};
console.log(`\nTution fees: ${Tutionfee[answer.courses]}/-\n`);
console.log(`Balance : ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Taransfer", "Easypasia", "Jasschash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money :",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    }
]);
console.log(`\n You select payment method ${paymentType.payment}\n`);
const Tutionfees = Tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (Tutionfees === paymentAmount) {
    console.log(`Congratulations, you have succesfully enrolled in${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n*********Status*******\n");
        console.log(`Student Name : ${answer.student}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Courses: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance:${myBalance += paymentAmount}`);
    }
    else {
        console.log(`\nExciting Student Mangement System\n`);
    }
}
else {
    console.log("Invaild amount due to courses\n");
}
