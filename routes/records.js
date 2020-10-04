const express = require('express');
const recordController = require('../controller/recordController');
const router = express.Router();
 
// Routes post requests in order to filter records
router.post('/filter', (req, res, next) => {
    console.log(req.body);
    var promise = recordController.getFilteredRecords(req.body);

    promise.then((records) => {
        if (records.success) {
            res.status(200).send({code: records.code, msg: records.msg, records:records.records});
        }
        else {
            res.status(404).send({ code: records.code, msg: records.msg });
        }
    }).catch(next);
});

// Routes add requests in order to create record
router.post('/add', (req, res, next) => {
    console.log(req.body);
    var promise = recordController.createRecord(req.body);

    promise.then((records) => {
        if (records.success) {
            res.send({code: records.code, msg: records.msg, records:records.records});
        }
        else {
            res.status(404).send({ code: records.code, msg: records.msg });
        }
    });
});


module.exports = router;
