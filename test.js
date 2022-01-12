const assert = require('assert');

const secondsToDateLikeString = require('./js_practical_task').secondsToDateLikeString;
const secToDate = require('./js_practical_task').secondsToDate;
const converter = require('./js_practical_task').converter;
const counter = require('./js_practical_task').counter;
const repeatter = require('./js_practical_task').repeatter;


describe('JS_practical_task secondsToDateLikeString', function () {
    it('0 should return 01.06.2020', function ()  {
        assert.equal(secondsToDateLikeString(0), '01.06.2020')
    });
    it('31536000 should return 01.06.2021', function ()  {
        assert.equal(secondsToDateLikeString(31536000), '01.06.2021')
    });
    it('86400 should return 02.06.2020', function ()  {
        assert.equal(secondsToDateLikeString(86400), '02.06.2020')
    });
});

describe('JS_practical_task secondsToDate', function () {
    it('0 should return 2020-06-01T00:00:00.000Z', function ()  {
        let result = secToDate(0);
        let expected = new Date('2020-06-01T00:00:00.000Z');
        assert.deepEqual(result, expected);
        
    });
    it('31536000 should return 2021-06-01T00:00:00.000Z', function ()  {
        let result = secToDate(31536000);
        let expected = new Date('2021-06-01T00:00:00.000Z');
        assert.deepEqual(result, expected);

    });
    it('86400 should return 2020-06-02T00:00:00.000Z', function ()  {
        let result = secToDate(86400);
        let expected = new Date('2020-06-02T00:00:00.000Z');
        assert.deepEqual(result, expected);

    });
});

describe('JS_practical_task Converter', function () {
    it('5 should return 101', function () {
        let result = converter(5);
        assert.equal(result, '101');
    });
    it('10 should return 1010', function () {
        let result = converter(10);
        assert.equal(result, '1010');
    });
});

describe('JS_practical_task Counter', function () {
    it('\'a\', \'test it\' -> 0', function () {
        let result = counter('a', 'test it');
        assert.equal(result, 0);
    });
    it('\'t\', \'test it\' -> 3', function () {
        let result = counter('t', 'test it');
        assert.equal(result, 3);
    });
    it('\'T\', \'test it\' -> 3', function () {
        let result = counter('T', 'test it');
        assert.equal(result, 3);
    });
});

describe('JS_practical_task Repeatter', function () {
    it('Hello -> HHeelloo', function () {
        let result = repeatter('Hello');
        assert.equal(result, 'HHeelloo');
    });
    it('Hello world -> HHeello  wworrldd', function () {
        let result = repeatter('Hello world');
        assert.equal(result, 'HHeello  wworrldd');
    });
});