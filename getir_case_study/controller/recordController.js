const recordAccess = require('../dataAccess/recordAccess');
const ValidationError = require('../error/ValidationError')

var recordController = {
    getFilteredRecords: (filterRequest) => {

        if (!filterRequest.startDate) {
            throw new ValidationError({ startDate: 'required' })
        }

        if (typeof filterRequest.startDate !== 'string') {
            throw new ValidationError({ startDate: 'must be a string' })
        }

        if (!filterRequest.endDate) {
            throw new ValidationError({ endDate: 'required' })
        }
        
        if (typeof filterRequest.endDate !== 'string') {
            throw new ValidationError({ endDate: 'must be a string' })
        }

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
