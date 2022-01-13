const assert = require('assert');

const secondsToDateLikeString = require('./js_practical_task').secondsToDateLikeString;
const secToDate = require('./js_practical_task').secondsToDate;
const converter = require('./js_practical_task').converter;
const counter = require('./js_practical_task').counter;
const repeatter = require('./js_practical_task').repeatter;
const redundant = require('./js_practical_task').redundant;
const hanoi = require('./js_practical_task').hanoi;
const multiply = require('./js_practical_task').multiplyMatrix;


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

describe('JS_practical_task Redundant', function () {
    it('return function which return \'Hello\'', function () {
        let result = redundant('Hello');
        let type = typeof result;
        assert.equal(result(), 'Hello');
        assert.equal(type, 'function');
    });
    it('return function which return \'\'', function () {
        let result = redundant('');
        let type = typeof result;
        assert.equal(result(), '');
        assert.equal(type, 'function');
    });
});

describe('JS_practical_task Hanoi', function () {
    it('3 return 7', function () {
        let result = hanoi(3);
        assert.equal(result, 7);
    });
    it('5 return 31', function () {
        let result = hanoi(5);
        assert.equal(result, 31);
    });
});

describe('JS_practical_task Multiply Matrix', function () {
    it('return [[32, 40], [25, 29]]', function () {
        let matrix1 = [[4, 4], [5, 2]];
        let matrix2 = [[3, 3], [5, 7]];
        let expectedResult = [[32, 40], [25, 29]];
        let result = multiply(matrix1, matrix2);
        assert.deepEqual(result, expectedResult);
    });
    it('return [[96, 99, 25], [92, 94, 24], [45, 48, 12]]', function () {
        let matrix1 = [[8, 8, 1], [10, 6, 2], [2, 5, 0]];
        let matrix2 = [[5, 4, 1], [7, 8, 2], [0, 3, 1]];
        let expectedResult = [[96, 99, 25], [92, 94, 24], [45, 48, 12]];
        let result = multiply(matrix1, matrix2);
        assert.deepEqual(result, expectedResult);
    });

});