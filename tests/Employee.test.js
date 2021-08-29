const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("Initialization", () => {
        it("should return an object containing employee info when called with the 'new' keyword", () => {
            const newEmployee = new Employee();

            expect(typeof(newEmployee)).toBe("object");
        });

        it("should set name with the constructor argument", () => {
            const testName = "Jordan";
            const newEmployee = new Employee(testName);
            
            expect(newEmployee.name).toBe(testName);
        });

        it("should set ID with the constructor argument", () => {
            const testID = 48;
            const newEmployee = new Employee("Foo", testID);

            expect(newEmployee.id).toBe(testID);
        });

        it("should set email with the constructor argument", () => {
            const testEmail = "test@testing.com";
            const newEmployee = new Employee("Foo", 1, testEmail);

            expect(newEmployee.email).toBe(testEmail);
        });

        it("should get name with the getName() method", () => {
            const testName = "Jordan";
            const newEmployee = new Employee(testName);

            expect(newEmployee.getName()).toBe(testName);
        });

        it("should get ID with the getID() method", () => {
            const testID = 48;
            const newEmployee = new Employee("Foo", testID);

            expect(newEmployee.getID()).toBe(testID);
        });

        it("should get email with the getEmail() method", () => {
            const testEmail = "test@testing.com";
            const newEmployee = new Employee("Foo", 1, testEmail);

            expect(newEmployee.getEmail()).toBe(testEmail);
        });

        it("should return 'Employee' when using the getPosition() method", () => {
            const testValue = "Employee";
            const newEmployee = new Employee("Jordan", 1, "test@testing.com");

            expect(newEmployee.getPosition()).toBe(testValue);
        });
    });
});