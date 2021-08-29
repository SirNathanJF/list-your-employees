const Manager = require("../lib/Manager");
const Employee = require('../lib/Employee');

describe('Manager', () => {
    describe("Initialization", () => {
        it("should set an office number with the constructor argument", () => {
            const testOffice = 48;
            const newManager = new Manager("Foo", 1, "test@testing.com", testOffice);

            expect(newManager.officeNumber).toBe(testOffice);
        });

        it('should return "Manager" when using the getPosition() method', () =>{
            const testPosition = "Manager";
            const newManager = new Manager("Foo", 1, "test@testing.com", 48);

            expect(newManager.getPosition()).toBe(testPosition);
        });

        it("should get office number via getOfficeNumber() method", () => {
            const testOffice = 48;
            const newManager = new Manager("Foo", 1, "test@testing.com", testOffice);

            expect(newManager.getOfficeNumber()).toBe(testOffice);
        });
    });
});