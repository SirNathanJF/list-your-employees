const Intern = require("../lib/Intern");

describe('Intern', () => {
    describe("Initialization", () => {
        it("should set school name with constructor argument", () => {
            const testSchool = "University of Denver";
            const newIntern = new Intern("Foo", 1, "test@testing.com", testSchool);

            expect(newIntern.school).toBe(testSchool);
        });

        it('should return "Intern" when using the getPosition() method', () => {
            const testPosition = "Intern";
            const newIntern = new Intern("Foo", 1, "test@testing.com", "University of Denver");

            expect(newIntern.getPosition()).toBe(testPosition);
        });

        it("get the school with the getSchool() method", () => {
            const testSchool = "University of Denver";
            const newIntern = new Intern("Foo", 1, "test@testing.com", testSchool);

            expect(newIntern.getSchool()).toBe(testSchool);
        });
    });
});