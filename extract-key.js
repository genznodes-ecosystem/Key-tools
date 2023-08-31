const fs = require('fs');
let keyth=require('keythereum')
const readline = require('readline-sync');

const address = process.argv[2]
const gethDatadir = process.argv[3] || '../validator'
let password = process.argv[4]

console.log(`extracting private key for address '${address}' from '${gethDatadir}/keystore'`)

if(!password) {
    password = readline.question('Enter the password for this key file: ', { hideEchoBack: true });
}

let keyobj=keyth.importFromFile(address, gethDatadir)

let privateKey=keyth.recover(password, keyobj) //this takes a few seconds to finish

const fileName = `PK_${address}.txt`
fs.writeFileSync(fileName , privateKey.toString('hex'));

console.log(`Private key written to file '${fileName}'`)
