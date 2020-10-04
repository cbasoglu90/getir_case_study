const recordAccess = require('../dataAccess/recordAccess');

var recordController = {
    getFilteredRecords: (filterRequest) => {
        var promise = recordAccess.getRecordsByFilter(filterRequest);
        return promise.then((records) => {
            if (records.success) {
                return { 
                    success: records.success, 
                    code: records.code, 
                    msg: records.msg,
                    records: records.records 
                };
            } else {
                return { 
                    success: records.success, 
                    code : records.code, 
                    msg: records.msg 
                };
            }
        });
    },

    createRecord: (record) => {
        var promise = recordAccess.addRecord(record);
        return promise.then((record) => {
            if (record.success) {
                return { 
                    success: record.success, 
                    code: record.code, 
                    msg: record.msg,
                    records: record.record
                };            
            }
            else {
                return { 
                    success: record.success, 
                    code : record.code, 
                    msg: record.msg 
                };
            }
        });
    }
}

module.exports = recordController;
