const express = require('express');
const recordController = require('../controller/recordController');
const router = express.Router();
 
router.post('/', (req, res, next) => {
    console.log(req.body);
    var promise = recordController.getFilteredRecords(req.body);

    promise.then((records) => {
        if (records.success) {
            res.send({code: records.code, msg: records.msg, records:records.records});
        }
        else {
            res.send({ code: records.code, msg: records.msg });
        }
    });
});

module.exports = router;
