require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue rice stereo escape harvest cloth forward tank'; 
let testAccounts = [
"0x067df391410e3a0f7569de75a1c04167e6e51a58c492c4867a1d13345029a19d",
"0xa0ad5f9b6d3f9c3edee8ea4eb1b142884d014bf41b06ef76efc7befa95693649",
"0x808ddae338f98a3123a9b3b672f1d01d6c2a46c19256ae5d75aa151900dbf4bc",
"0x82a09f763062d3ca454b1b478edb74c46b478cf705176a087d34dfdd57d8f812",
"0xcfcb45a33022b625707a725118fe7a03fa2cd891a948ce64864ab43a7aeca664",
"0x2dfa1df54e2ea6a461e51d4b952c6f4a83ffa19353bdcd3bc3b50a6495f395c8",
"0x0cff6016ef485946db7d8f594ee6a0c7312315ddf815d8da62dc170f297d7e20",
"0xf3fe16fc0433ef79d2e149ef986cd43aeff810b51bed6401d5c73d54ab731a58",
"0xdf209003c803d73f0c14d0b2326702d104144f86412333b0bc8fe8508e76a7f5",
"0xab4849c89f1e43a6bcd87a48b6e9a9dd0cb81b289cd7937befffe74377b61f54"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

