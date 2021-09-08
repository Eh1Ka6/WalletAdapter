import { PublicKey,sendAndConfirmTransaction,SystemProgram, Transaction,Connection,LAMPORTS_PER_SOL } from '@solana/web3.js';


export const getProvider = () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
    window.open("https://phantom.app/", "_blank");
    return null
};

export let getPhantomWallet = async function () {  
    const provider = await getProvider()
    if (provider) {
        provider.connect()
        return provider
       
    }
    return undefined;
   
}

export let Mint = async function (provider) {  
    if (provider) {
            const network = "https://api.testnet.solana.com";
            const connection = new Connection(network);
            var fromAirdropSignature = await connection.requestAirdrop(
                provider.publicKey,
                LAMPORTS_PER_SOL,
            );
            
            await connection.confirmTransaction(fromAirdropSignature);
        
    }else {
        console.log("Provider not found")
    }
   
}

export let sendtransaction = async function (provider,toaddress, amount) {
  if (provider){
      
            const to = new PublicKey(toaddress)
            console.log(to.toString());
            const network = "https://api.testnet.solana.com";
            const connection = new Connection(network);
            const transaction = new Transaction().add(
                    SystemProgram.transfer({
                    fromPubkey: provider.publicKey,
                    toPubkey: to,
                    lamports: amount * LAMPORTS_PER_SOL,
                    }),
                );
            let { blockhash } = await connection.getRecentBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = provider.publicKey;
            const signedTransaction = await provider.signTransaction(transaction);
            //console.log('SIgne transaction', signedTransaction);
            const signature = await connection.sendRawTransaction(signedTransaction.serialize());
            //console.log('SIGNATURE', signature);
       
    } else {
        console.log("Provider not found")
    }
}