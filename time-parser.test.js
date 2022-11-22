const timeParser = require("./time-parser");
const validTime = {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"};

describe(`timeParser('') fn `, () => {
    it('should return current unix & utc time ', () => {
        const now = new Date();
        const current = {unix:now.valueOf(),utc:now.toUTCString()};
        const value = timeParser("")
        expect(value.unix).toBeLessThanOrEqual(current.unix)
        expect(value.utc).toEqual(current.utc)
    });
});

describe(`timeParser(undefined) fn `, () => {
    it('should return current unix & utc time ', () => {
        const now = new Date();
        const current = {unix:now.valueOf(),utc:now.toUTCString()};
        const value = timeParser(undefined)
        expect(value.unix).toBeLessThanOrEqual(current.unix)
        expect(value.utc).toEqual(current.utc)
    });
});

describe(`timeParser(2015-12-25) fn `, () => {
    it(`should return the current unix time as '1451001600000' 
    & utc time as 'Fri, 25 Dec 2015 00:00:00 GMT'`, () => {
        const value = timeParser('2015-12-25')
        expect(value.unix).toEqual(validTime.unix)
        expect(value.utc).toEqual(validTime.utc)
    });
});

describe(`timeParser(1451001600000) fn `, () => {
    it(`should return the current unix time as '1451001600000' 
    & utc time as 'Fri, 25 Dec 2015 00:00:00 GMT'`, () => {
        const value = timeParser('1451001600000')
        expect(value.unix).toEqual(validTime.unix)
        expect(value.utc).toEqual(validTime.utc)
    });
});


describe(`timeParser(testString) fn `, () => {
    it(`should return the response {'error':"Invalid Date"}`, () => {
        const value = timeParser('testString')
        expect(value.unix).toBeUndefined();
        expect(value.utc).toBeUndefined();
        expect(value.error).toBeDefined();
        expect(value.error).toEqual('Invalid Date');
    });
});