

async function permitteCharacters() {
        let permitted = [];
    if(process.env.UPPERCASE_LETTERS === 'TRUE') {
        permitted.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if(process.env.UPPERCASE_LETTERS === 'TRUE') {
        permitted.push(...'abcdefghijklmnopqrstuvwxyz');
    }
    if(process.env.NUMBERS === 'TRUE') {
        permitted.push(...'0123456789');
    }
    if(process.env.SPECIAL_CHARACTERS === 'TRUE') {
        permitted.push(...'!@#$%^&*()_+[]{}|;:,.<>?');
    }
    return permitted;
}

export default permitteCharacters;