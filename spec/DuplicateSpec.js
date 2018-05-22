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
})