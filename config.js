

export const CONTACT_ADDRESS = '0xA980F4A03A34478667ee0cDA6DD477C90960D54C';
  
export const CONTACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "contacts",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "Manufacturename",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Drugname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Composition",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Targetedmedicalcondition",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_mname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_dname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_comp",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_target",
        "type": "string"
      }
    ],
    "name": "createContact",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]