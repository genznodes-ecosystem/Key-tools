## Setup

```bash
git clone https://github.com/genznodes-ecosystem/Key-tools.git 
cd Key-tools
npm install
```

## extract private key from keystore file

```bash
node extract-key [ADDRESS] [PATH_KEYSTORE] [password]
```

* ADDRESS: The address you are interested in
* PATH: the directory before `keystore`.
* PASSWORD: The password that encrypts the key file.

EXAMPLES

```bash
node extract-key 0x4BF8E1E54E50E3b64E9c486D4230Ee4F9e7dE792 $HOME/.data_dir your_password
```

 Output 
> -  extracting private key for address '0x4BF8E1E54E50E3b64E9c486D4230Ee4F9e7dE792' from '$HOME/.data_dir/keystore' 
>
>- Private key written to file 'PK_0x4BF8E1E54E50E3b64E9c486D4230Ee4F9e7dE792.txt'