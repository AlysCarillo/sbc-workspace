// @solana/web3.js

import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('C4EVHxyPmfMa7jkiEpSe9nDNK9Sy1cd8weyQJebgyfMB')
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey)
    console.log('Balance: ',balance)
}

main()