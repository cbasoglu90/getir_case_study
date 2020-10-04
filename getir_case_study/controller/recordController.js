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
    }
}

module.exports = recordController;
