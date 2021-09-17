let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday', function () {
    it('should print out it is weekday', function () {
        var day = 'Monday';
        assert.equal(isWeekday("Monday"), true);

    });

    it('should print out it is not a weekday', function () {
        var day = 'Saturday';
        assert.equal(isWeekday("Saturday"), false);

    });


});