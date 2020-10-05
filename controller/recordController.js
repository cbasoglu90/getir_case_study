const recordAccess = require('../dataAccess/recordAccess');
const ValidationError = require('../error/ValidationError')

var recordController = {
    getFilteredRecords: (filterRequest) => {
        // Adds field validations
        if (!filterRequest.startDate) {
            throw new ValidationError({ startDate: 'required' })
        }

        if (!filterRequest.endDate) {
            throw new ValidationError({ endDate: 'required' })
        }
        
        if (!filterRequest.minCount) {
            throw new ValidationError({ minCount: 'required' })
        }

        if (!filterRequest.maxCount) {
            throw new ValidationError({ maxCount: 'required' })
        }
        
        // Fetches filtered records via data access layer
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

    // Creates record function is written for creating test data in integation tests.
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
