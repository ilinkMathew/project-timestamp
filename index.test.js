const request = require('supertest');
const app = require('./index');


const validTime = {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"};
describe('Sample test', () => {
    it('should ', () => {
        expect(true).toBe(true);
    });
});


describe("'/api/:date'", () => {
    
    it('should return the current unix & utc time ',  () => {
       return request(app)
        .get('/api/?')
        .set('Accept','application/json')
        .expect(200)
        .then((res)=>{
            const now = new Date();
            expect(res.body.unix).toBeLessThanOrEqual(now.valueOf())
            expect(res.body.utc).toEqual(now.toUTCString());
        })
    });
});


describe("'/api/2015-12-25'", () => {
    
    it(`should return the current unix time as '1451001600000' 
    & utc time as 'Fri, 25 Dec 2015 00:00:00 GMT'`,  () => {
       return request(app)
        .get('/api/2015-12-25')
        .set('Accept','application/json')
        .expect(200)
        .then((res)=>{
            expect(res.body.unix).toEqual(validTime.unix)
            expect(res.body.utc).toEqual(validTime.utc)
        })
    });
});

describe("'/api/1451001600000'", () => {   
    it(`should return the current unix time as '1451001600000' 
    & utc time as 'Fri, 25 Dec 2015 00:00:00 GMT'`,  () => {
       return request(app)
        .get('/api/1451001600000')
        .set('Accept','application/json')
        .expect(200)
        .then((res)=>{
            expect(res.body.unix).toEqual(validTime.unix)
            expect(res.body.utc).toEqual(validTime.utc)
        })
    });
});


describe("'/api/<anystring>'", () => {   
    it(`should return the response {'error':"Invalid Date"}`,  () => {
       return request(app)
        .get('/api/testString')
        .set('Accept','application/json')
        .expect(200)
        .then((res)=>{
            expect(res.body.unix).toBeUndefined();
            expect(res.body.utc).toBeUndefined();
            expect(res.body.error).toBeDefined();
            expect(res.body.error).toEqual('Invalid Date');
        })
    });
});