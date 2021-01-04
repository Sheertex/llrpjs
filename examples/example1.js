var Reader = require('../index');   // require('llrpjs')

let reader = Reader({
    host: "192.168.1.2",
    port: 5084
});

async (()=>{
    try {
        await reader.connect();
    } catch (e) {
        console.error(e);
    }

    try {
        await reader.transact({
            MessageID: 1,
            MessageType: "SET_READER_CONFIG",
            MessageBody: {
                //data
            }
        }).then(rsp=>{
            // check for errors
        });

        await reader.transact({
            MessageID: 2,
            MessageType: "ADD_ROSPEC",
            MessageBody: {
                //data
            }
        }).then(rsp=>{
            // check for errors
        });

        await reader.transact({
            MessageID: 3,
            MessageType: "ENABLE_ROSPEC",
            MessageBody: {
                //data
            }
        }).then(rsp=>{
            // check for errors
        });

        await reader.transact({
            MessageID: 4,
            MessageType: "START_ROSPEC",
            MessageBody: {
                //data
            }
        }).then(rsp=>{
            // check for errors
        });

        while (rsp = await reader.recv(-1)) {
            // handle response
        }
    } catch (e) {
        console.error(e);
    } finally {
        await reader.disconnect();
    }
})();

reader.on('RO_ACCESS_REPORT', msg=>{
    //process data
});

reader.on('READER_EVENT_NOTIFICATION', msg=>{
    //process data
});