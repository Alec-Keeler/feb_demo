const bcrypt = require('bcryptjs');
// hash, compare

async function generatePass(password) {
    const hash = await bcrypt.hash(password, 12)

    console.log(hash)
}

// generatePass('hunter12')

// $2a
// $12
// $XCCNr9Wareu.cu8h/aypE.ZDRt82JurstTQkFenOct03WPUlTO/Wi
// $2a$12$XCCNr9Wareu.cu8h/aypE.ZDRt82JurstTQkFenOct03WPUlTO/Wi

async function checkPass(password, hash) {
    const isPass = await bcrypt.compare(password, hash)

    console.log(isPass)
}

checkPass('hunter12', '$2a$12$XCCNr9Wareu.cu8h/aypE.ZDRt82JurstTQkFenOct03WPUlTO/Wi')