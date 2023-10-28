import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("C4EVHxyPmfMa7jkiEpSe9nDNK9Sy1cd8weyQJebgyfMB")
const decoded = base58.decode('4PSYdbFhpARZE61BWAjkFj6R5TDdEBDh713yvBFR33cMs2SRHCpE6Yvdyw4w4ybeyoPSBnrRVbmxyV3Xf73GHttq')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();