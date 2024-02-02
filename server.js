const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const Web3 = require('web3');
const mongodb = require('mongodb').MongoClient;
const contract = require('@truffle/contract');
const artifacts = require('./build/contracts/Contacts.json');
const CONTACT_ABI = require('./config');
const CONTACT_ADDRESS = require('./config');

app.use(cors());
app.use(express.json());

if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider);
} else {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
}

// mongodb.connect('mongodb://127.0.0.1:27017/FDA',
//     {
//         useUnifiedTopology: true,
//     }, async (err, client) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Mongodb connected');
//         const db = client.db('blockchain-node-api');
       
       
//     });

    app.listen(process.env.PORT || 3001, async () => {
        console.log('listening on port ' + (process.env.PORT || 3001));
        const accounts = await web3.eth.getAccounts();
        const contactList = new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);
        // await contactList.methods.createContact("Helo","123").send({
        //     from: '0x8336dddc5Dbcb14Ac2A48603545056EbBf51dDE4',
        //     value: web3.utils.toWei("0.5","ether")
            
        // });
        routes(app, null, accounts, contactList);

    });