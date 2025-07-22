import permitteCharacters from './utils/permitted-characters.js';
async function handle() {
    let character = []; 
    let password = '';  
    const passwordLength = process.env.PASSWORD_LENGTH; 
    character = await permitteCharacters();    

    for(let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * character.length);
        password += character[randomIndex];
    }
return password;
    
} 

export default handle;