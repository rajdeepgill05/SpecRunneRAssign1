describe(positiveSum, function(){
    it("should sum all the numbers if they are positive", function(){
        expect([2, 5, 3]).toBe(10);
    })
    it("leave negative numbers and add all the positive numbers", function(){
        expect([2, -3, 5]).toBe(4);
    })
    it("should return zero if an empty array is passed", function(){
        expect([]).toBe(0);
    })
    it("should return zero if all numbers are negative", function(){
        expect([-5, -6, -8]).toBe(0);
    })
});


describe(isDivisible, function(){
    it("should return true if the number is divisible by both the divisors", function(){
        expect(isDivisible(8, 2, 4)).toBe(true);
    })
    it("should return false if number is smaller than both of the divisors", function(){
        expect(isDivisible(2, 4, 8)).toBe(false);
    })
    it("should return false if number is divisile by only one of teh divisors", function(){
        expect(isDivisible(6, 2, 4)).toBe(false);
    })
    it("should return false if number is not divisible by any of the numbers", function(){
        expect(isDivisible(7, 2, 4)).toBe(false);
    })
});