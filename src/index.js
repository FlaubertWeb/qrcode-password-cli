import prompt from 'prompt'; 

import promptSchemaMain from './prompts-schema/prompt-schema-main.js';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';
import chalk from 'chalk';


async function main(){ 
   prompt.get(promptSchemaMain,  async(err, choose) => {
        if(choose.select == '1') await createQRCode();
        if(choose.select == '2') await createPassword();
        if(err) {
            console.error(chalk.red("Error in prompt:", err));
            return;
        }
       
   });

   prompt.start();

}
main();