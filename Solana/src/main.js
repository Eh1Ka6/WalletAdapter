
/*
* 1. Check for injected web3 (mist/metamask)
* 2. If metamask/mist create a new web3 instance and pass on result
* 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
* 4. Get user account from metamask
* 5. Get user balance
*/
import { getProvider, getPhantomWallet ,Mint, sendtransaction } from './getSolweb3.js'
require('./main.css');
var provider = undefined
document.getElementById('Connect').onclick = async function ()  {
   provider = await getPhantomWallet() 
}

document.getElementById('Mint').onclick = async function () {
   console.log("Minting")
   await Mint(provider) 
}
document.getElementById('SendTransaction').onclick = async function () {
   console.log("Transferring")
   await sendtransaction(provider,"Dq5SV3wvC9yVQnDwV8MB7a6QS7vQvs5Ad1cRJRzfMK8B",1) 
}
