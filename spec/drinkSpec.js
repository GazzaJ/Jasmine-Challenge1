describe("ageChecker", function() {

    beforeEach(function() {
       age = new ageChecker;
    })

    describe("Age function", function() {
        it("should exist", function() {
            expect(ageChecker).toBeDefined();
        })
        it("should return Drink Toddy when ageChecker(13)", function() {
            var result = ageChecker(13)
            expect(result).toBe("Drink Toddy");
        })
        it("should return Drink Coke when ageChecker(17)", function() {
            var result = ageChecker(17)
            expect(result).toBe("Drink Coke");
        })
        it("should return Drink Beer when ageChecker(18)", function() {
            var result = ageChecker(18)
            expect(result).toBe("Drink Beer");
        })
        it("should return Drink Beer when ageChecker(20)", function() {
            var result = ageChecker(20)
            expect(result).toBe("Drink Beer");
        })
        it("should return Drink Whisky when ageChecker(30)", function() {
            var result = ageChecker(30)
            expect(result).toBe("Drink Whiskey");
        })
        it("should return Drink Whisky when ageChecker(130)", function() {
            var result = ageChecker(129)
            expect(result).toBe("Drink Whisky");
        })
        it("should return an error if ageChecker(131)", function() {
            var result = ageChecker(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        })
        it("should contain Drink when ageChecker(17)", function() {
            var result = ageChecker(10).indexOf("Drink")
            expect(result).not.toEqual(-1);
        });    
    });
});