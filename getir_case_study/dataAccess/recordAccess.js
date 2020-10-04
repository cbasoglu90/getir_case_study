const recordModel = require('../model/record');

var recordAccess = {
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
    }
}

module.exports = recordAccess;
