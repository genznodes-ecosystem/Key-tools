const fs = require('fs');
let keythereum = require('keythereum')
const readline = require('readline-sync');

const gethDataDir = '../validator/keystore'
const pwdDir = gethDataDir + '/pwd.txt'

let password = ''

try {
    password = fs.readFileSync(pwdDir)
} catch {
    console.log(`You do not have saved password in ${pwdDir}`)

    if(!password) {
        password = readline.question('Enter the password for this key file: ', { hideEchoBack: true });
        console.log(`Save password in '${pwdDir}'`)
        fs.writeFileSync(pwdDir, password)
    }
}

const params = { keyBytes: 32, ivBytes: 16 };
const dk = keythereum.create(params);

const options = {
    kdf: "pbkdf2",
    cipher: "aes-128-ctr",
    kdfparams: {
        c: 262144,
        dklen: 32,
        prf: "hmac-sha256"
    }
};

const keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options);
const address = keyObject.address

console.log(`Save encrypted private key for address '${address}' in '${gethDataDir}'`)
const fileName = keythereum.exportToFile(keyObject, gethDataDir);

console.log(`Encrypted private key saved in file '${fileName}'`)

const privateKeyDir = `${gethDataDir}/PK_${address}.txt`
fs.writeFileSync(privateKeyDir , dk.privateKey.toString('hex'));

console.log(`Private key written to file '${privateKeyDir}'`)
