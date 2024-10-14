import { digitize } from "./convertNumbersToArray";

// once your solution works and passes the basic tests, come up with your own tests to add here
describe("convert number to reverse order array kata", () => {
    it("should pass basic tests", () => {
        expect(digitize(1234561)).toStrictEqual([1, 6, 5, 4, 3, 2, 1]);
        expect(digitize(0)).toStrictEqual([0]);
        expect(digitize("")).toStrictEqual([]);
        expect(digitize(111111)).toStrictEqual([1, 1, 1, 1, 1, 1]);
    });
    it("should return an array", () => {
        expect(Array.isArray(digitize(1234561))).toBe(true);
    });
});

