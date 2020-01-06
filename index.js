/**
 * @description BINTable.com BIN Lookup API
 * @author bintable.com
 * @since 06/01/2020
 */
const https = require('https');
const baseAPI = 'https://api.bintable.com/v1';

/**
 * @description Lookup the bin data
 * @param BIN string, apiKey string,callBack function
 */
exports.Lookup = (BIN,apiKey,callBack)=>{
    var url = baseAPI+'/'+BIN+'?api_key='+apiKey;
    return _sendGet(url,callBack);
}

/**
 * @description Get account expiry and balance
 * @param apiKey string,callBack function
 */
exports.Balance = (apiKey,callBack)=>{
    var url = baseAPI+'/balance'+'?api_key='+apiKey;
    return _sendGet(url,callBack);
}

function _sendGet(url,callBack){
    https.get(url, (resp) => {
        let data = '';
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            callBack(data);
        });
      }).on("error", (err) => {
            //In case of network or any other error moc the same respone
            callBack({'result':400,'message':err.message,'data':{}})
      });
}