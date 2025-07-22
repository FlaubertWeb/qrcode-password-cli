import chalk from "chalk";

const promptSchemaMain = [
        {
           name:"select",
           description: chalk.yellow.bold("Escolha a ferramenta:\n(1- QRCODE\n(2- Password"),   
           pattern:/^[1-2]+$/,
           message: chalk.red.italic("Escolha apenas 1 ou 2"), 
           required: true

        }

]


export default promptSchemaMain;