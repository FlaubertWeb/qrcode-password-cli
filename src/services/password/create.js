import handle from './handle.js';
import chalk from 'chalk';

async function createPassword() {
console.log(chalk.yellow("Creating password..."));
const password = await handle();
console.log(chalk.bgWhite.bold(password));
console.log(chalk.green("Password created successfully."));


}

export default createPassword; 