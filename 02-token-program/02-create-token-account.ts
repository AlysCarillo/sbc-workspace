import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("C4EVHxyPmfMa7jkiEpSe9nDNK9Sy1cd8weyQJebgyfMB")
const decoded = base58.decode('4PSYdbFhpARZE61BWAjkFj6R5TDdEBDh713yvBFR33cMs2SRHCpE6Yvdyw4w4ybeyoPSBnrRVbmxyV3Xf73GHttq')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "FtQP4zx6DrBK5A68RGYehgD1Rtt2BbVUJNHbR89qoJoA"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();