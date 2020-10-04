const recordController = require('../../controller/recordController');
var getFilteredRecords = recordController.getFilteredRecords;

describe("getFilteredRecords()", () => {
  
    var filterReqExistsInDB = {
        "startDate": "2016-01-26",
        "endDate" : "2018-01-26",
        "minCount" : 140,
        "maxCount" : 160
    };

    it('getFilteredRecords should return true', () => {
        expect(getFilteredRecords(filterReqExistsInDB).then((records) => {
            if (records.success) {
                return true;
            }
            else {
                return false;
            }
        })).toBeTruthy();
    });

    it('getFilteredRecords size should be greater than zero', () => {
        expect(getFilteredRecords(filterReqExistsInDB).then((records) => {
            if (records.records.length > 0) {
                return true;
            }
            else {
                return false;
            }
        })).toBeTruthy();
    });

    var filterReqNotExistsInDB = {
        "startDate": "2018-01-26",
        "endDate" : "2018-01-26",
        "minCount" : 500,
        "maxCount" : 500
    };

    it('getFilteredRecords size should be zero', () => {
        expect(getFilteredRecords(filterReqNotExistsInDB).then((records) => {
            if (records.records.length === 0) {
                return true;
            }
            else {
                return false;
            }
        })).toBeTruthy();
    });

});