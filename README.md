# api_nodejs
The Nodejs Package for BINTable.com API

# Installation
Please run > `npm i bintable_api`

# Usage
The package contains two endpoints
- BIN Lookup endpoint
- Balance check endpoint

For calling BIN lookup, you can use the following code after replacing the BIN, and API_KEY with valid data.

```javascript
const  bintableApi = require('bintable_api');
bintableApi.Lookup(BIN,API_KEY,lookup);

function lookup(data){
    console.log(data);
}
```
For Calling Balance check

```javascript
const  bintableApi = require('bintable_api');
bintableApi.Balance(API_KEY,balance);

function balance(data){
    console.log(data);
}
```

For more information and API key, please visit
[BINTable BIN Lookup API]<https://bintable.com/get-api>
