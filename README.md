# WalletAdapter

### Prerequisites 
To run the example you must have yarn installed on your computer
Your wallet must be connected to testnet
### Install and run the example  
Enter the directory Solana on your terminal 
Run : ``` yarn install ```
Run : ``` yarn build  ```
Run : ``` yarn start ```
The last command will open a webpack server on 8080 with 3 buttons Connect , Mint for dev purpose 
 
 ### Extra config 
- You can change the network for production within the function of getSolweb3.js 
- The funtion sentransaction takes 3 argument, a pointer to the current wallet connection,  the adresse of receiving wallet and the amount 
It must be called as follow :  
 ```JS
 document.getElementById("SendTransaction").onclick = async function () {
   console.log("Transferring")
   await sendtransaction(provider,"Dq5SV3wvC9yVQnDwV8MB7a6QS7vQvs5Ad1cRJRzfMK8B",1) 
}
 ```