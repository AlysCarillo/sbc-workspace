import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('4PSYdbFhpARZE61BWAjkFj6R5TDdEBDh713yvBFR33cMs2SRHCpE6Yvdyw4w4ybeyoPSBnrRVbmxyV3Xf73GHttq');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('FtQP4zx6DrBK5A68RGYehgD1Rtt2BbVUJNHbR89qoJoA'), //mint or token key
        new Web3.PublicKey('4ctgf7kA66JHpivpSq6C4L7v7aupD4vjzMMgTzQc5vUG'), //owner or token account key
        new Web3.PublicKey('C4EVHxyPmfMa7jkiEpSe9nDNK9Sy1cd8weyQJebgyfMB'), //authority - public key of the owner / payer
        100000000000, //amount
    )
    console.log('mint Token ', mintToken)

}
main()