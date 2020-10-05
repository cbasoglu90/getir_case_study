var should = require('should'); 
var request = require('supertest'); 

describe('POST /record/filter', () => {

    var apiUrl = 'https://murmuring-thicket-28162.herokuapp.com';

    // Happy path
    it('responds with 200 { /record/filter }', () => {
        let filterReq = {
            "startDate": "2016-01-26",
            "endDate" : "2018-01-26",
            "minCount" : 140,
            "maxCount" : 160
        };

        request(apiUrl).post('/record/filter')
            .send(filterReq)
            .end((err, res) => {
                res.status.should.equal(200);
            });
    });

    // Field validation error case
    it('responds with 400 { /record/filter }', () => {
        let filterReq = {
            "endDate" : "2018-01-26",
            "minCount" : 140,
            "maxCount" : 160
        };

        request(apiUrl).post('/record/filter')
            .send(filterReq)
            .end((err, res) => {
                res.status.should.equal(400);
            });
    });
})