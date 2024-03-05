import inquirer from "inquirer"; 

let user = await inquirer.prompt([
    {
        type: "input",
        name: "UserName",
        message: "what is your name?",
        validate: (ans)=>{
            if(!ans){
                return "please give your answer"
            }
            return true
        }    
    },
    {
        type: "number",
        name: "userAge",
        message: "what is your age?",
    },
    {
        type: "checkbox",
        name: "userEmail",
        message: "what is your Email?",
        choices: ["cricket","study","learning"],
        default: "Nothing",
    },
    {
        tyoe: "checkbox",
        name: "userEmail",
        message: "what is your Email?",
        choices: ["ETCQtest.com","Day@test.com","Nidz@test.com"],
        default: "Nothing",
    },
])

console.log(user)