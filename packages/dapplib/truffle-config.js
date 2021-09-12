require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind arrow hover kiwi flame snow'; 
let testAccounts = [
"0xcfafb4bd4ec35a589fdf7a97eba8bc562f607713df52186e7235d12affdc2797",
"0x712bac2b24e327490e13b065ff0ac30f31c85b442ba62047f2dae94f88832277",
"0xcfeee468b0bfdc03f059fad06d3102a931ef52a963b6dc14c5c02a3d6c11ff78",
"0x17f9c9917c3c88de0921d46cc227490293412789b2176d0b3baa8c0b2001147b",
"0x50807880749a6a13738e3144d29bba6b1f95b868bc99d23cf42a298e23c7f49c",
"0x3d7abdd81cb49e1a68af203f3e1cb49112a10660391703436dcb2c91d3e883ae",
"0x0aeb539631db14367e92a5486ac824ce9d698fe224cb5e3dc1854633aafa70a2",
"0xcc92e29e6cc305c41bb433707d6b1704a7ceaf5d65eb5dcd3c1449663d94ea11",
"0xa6217c8bc625332b0b2daddc9e59b13853400525c2bb3cbd7d74fcec99e25deb",
"0x00f8b2c687afad1eff6172eaaf204be464648645ceefcee8fcef08455dab3b0d"
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

