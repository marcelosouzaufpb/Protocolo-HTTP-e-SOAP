const soap = require('soap');
const url = 'http://www.crcind.com/csp/samples/SOAP.Demo.CLS?WSDL';

soap.createClient(url, (err, client) => {
    if (err) {
        console.error("An error occurred creating client:", err);
        return;
    }
    execution(client, 'AddInteger', {Arg1: 2, Arg2: 2});
    execution(client, 'DivideInteger', {Arg1: 2, Arg2: 2});
    execution(client, 'FindPerson', {id: 1});
    execution(client, 'GetByName', {name: 'Newton,Dave R.'});
    execution(client, 'GetDataSetByName', {name: 'Test'});
    execution(client, 'GetListByName', {name: 'Test'});
    // execution(client, 'LookupCity', {zip: 63163});
    execution(client, 'Mission', {});
    execution(client, 'QueryByName', {name: 'Test'});
});

function execution(client, nameFunction, args) {
    return client[nameFunction](args, (err, response) => {
        if (err) {
            console.error(`An error occurred calling client.${nameFunction}: `, err);
            return;
        }
        console.log(`client.${nameFunction}: response: `, response);
    });
}
