const simpleStorageABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "data",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_data",
        "type": "string"
      }
    ],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
const simpleStorageAddress = '0xCF4f0a54861C57294B9C6DAC90499ba8d34Be270';
const web3 = new Web3('http://localhost:9545');
const simpleStorage = new web3.eth.Contract(simpleStorageABI, simpleStorageAddress);

document.addEventListener('DOMContentLoaded', () => {
  const $setData = document.getElementById('setData');
  const $data = document.getElementById('data');
  let accounts = [];

  web3.eth.getAccounts()
  .then(_accounts => {
    accounts = _accounts;
  });

  const getData = () => {
    simpleStorage.methods
      .get()
      .call()
      .then(result => {
        $data.innerHTML = result;
      })
  };
  getData();

  $setData.addEventListener('submit', e => {
    e.preventDefault();
    const data = e.target.elements[0].value;
    simpleStorage.methods
      .set(data)
      .send({from: accounts[0]})
      .then(getData);
  });
});
