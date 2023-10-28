import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('4PSYdbFhpARZE61BWAjkFj6R5TDdEBDh713yvBFR33cMs2SRHCpE6Yvdyw4w4ybeyoPSBnrRVbmxyV3Xf73GHttq')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('C4EVHxyPmfMa7jkiEpSe9nDNK9Sy1cd8weyQJebgyfMB');
    const publicKeyTo = new Web3.PublicKey('4spmH3EniPoR57szbmXGDb2nW4wW2t4ipa8x6CvvF93m');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();