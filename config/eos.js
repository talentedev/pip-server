const { Api, JsonRpc } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');  // development only
const fetch = require('node-fetch'); //node only
const { TextDecoder, TextEncoder } = require('util'); //node only

const privateKeys = [process.env.PRIVATE_KEY];

const signatureProvider = new JsSignatureProvider(privateKeys);
const rpc = new JsonRpc(process.env.RPC_URL, { fetch }); //required to read blockchain state
const api = new Api({
        rpc, signatureProvider,
        textDecoder: new TextDecoder(),
        textEncoder: new TextEncoder()
    }); //required to submit transactions

module.exports = {
    rpc: rpc,
    api: api
}