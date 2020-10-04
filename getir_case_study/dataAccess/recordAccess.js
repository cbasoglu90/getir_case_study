const recordModel = require('../model/record');

var recordAccess = {
    // This function aggregates data using mongo aggregation pipeline
    getRecordsByFilter: (filter) => {

        return recordModel.aggregate([   
            { 
                "$match": {     
                    createdAt: {
                        $gte: new Date(filter.startDate),
                        $lt: new Date(filter.endDate)
                    }
                } 
            },
            {
                "$project": {
                    "_id" : 0,
                    "key": 1,
                    "createdAt": 1,
                    "totalCount": { $sum: "$counts"}      
                }
            },
            { 
                "$match": {totalCount: {$gte: filter.minCount, $lt: filter.maxCount}}
            }
        ]).then((records) => {
            console.debug(records);

            if (records) {
                return { success: true, code : 0, msg: "Records fetched successfully..", records: records }
            } else {
                return { success: false, code: -1, msg: "Record not found with given filter!" }
            }
        });
    },

    // Inserts new record to mongo db.
    addRecord: (record) => {
        return recordModel.create(record).then((record) => {
            if (record) {
                return { success: true, code : 0, msg: "Record created successfully..", record: record}
            } else {
                return { success: false, code: -2, msg: "Record could not be created!" }
            }
        });
    }
}

module.exports = recordAccess;
