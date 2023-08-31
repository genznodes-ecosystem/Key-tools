## Setup

```bash
git clone https://github.com/genznodes-ecosystem/Key-tools.git 
cd Key-tools
npm install
```

## extract private key from keystore file

```bash
node extract-geth-private-key [ADDRESS] [PATH_KEYSTORE] [password]
```

* ADDRESS: The address you are interested in
* PATH: the directory `keystore`.
* PASSWORD: The password that encrypts the key file.

EXAMPLES

```bash
node extract-geth-private-key 4BF8E1E54E50E3b64E9c486D4230Ee4F9e7dE792 $HOME/.data_dir your_password
```