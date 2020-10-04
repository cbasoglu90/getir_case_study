# Build A Restful Api With Node.Js, Express And MongoDB in scope of getir.com case study
This repository includes node.js case study sent by getir.com

## Requirements
● The code should be written in Node.js using express framework <br />
● The endpoint should just handle HTTP POST requests. <br />
● The application should be deployed on AWS or Heroku. You don’t need to use any API Gateway, Load Balancers or any other layer than the developed application. <br />
● The up to date repo should be publicly available in Github, Bitbucket or equivalent. 

## Deliverables
● The public repo URL which has the source code of the project, and a set of  instructions if there is any project specific configurations needed to run the project. <br />
● The public endpoint URL of the deployed API which is available for testing. <br />

## Required Information MongoDB URI: 
mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir case-study?retryWrites=true 

## Request Payload 
The request payload will include a JSON with 4 fields. <br />
● “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You  should filter the data using “createdAt” <br />
● “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in  the documents should be between “minCount” and “maxCount”. <br />

RequestSample: 
```
{ 
    "startDate": "2016-01-26", 
    "endDate": "2018-02-02", 
    "minCount": 2700, 
    "maxCount": 3000 
} 
```

## Response Payload 
Response payload should have 3 main fields. <br />
● “code” is for status of the request. 0 means success. Other values may be used  for errors that you define. <br />
● “msg” is for description of the code. You can set it to “success” for successful  requests. For unsuccessful requests, you should use explanatory messages. <br />
● “records” will include all the filtered items according to the request. This array should  include items of “key”, “createdAt” and “totalCount” which is the sum of the “counts”  array in the document. <br />

Response Sample: 
```
{ 
    "code":0, 
    "msg":"Success", 
    "records":[ 
        { 
            "key":"TAKwGc6Jr4i8Z487", 
            "createdAt":"2017-01-28T01:22:14.398Z", 
            "totalCount":2800 
        }, 
        { 
            "key":"NAeQ8eX7e5TEg7oH",     
            "createdAt":"2017-01-27T08:19:14.135Z", 
            "totalCount":2900 
        }    
    ] 
}
```

## Endpoints
Route |  Http Method  | Post Body | Description
----- | ------------- | ----------| -----------
localhost:3000/record |   `POST`  | {"startDate": "2016-01-26", "endDate" : "2018-01-26", "minCount" : 140, "maxCount" : 160 } | Filter records by startDate, endDate, minCount and maxCount

## Developers

Name Surname     | Github Repo Link
---------------- | ---------------- 
*Çağdaş Başoğlu* | [Github Link](https://github.com/cbasoglu90/getir_case_study)

## Contact
*E-mail adress:* cagdasbasoglou@gmail.com