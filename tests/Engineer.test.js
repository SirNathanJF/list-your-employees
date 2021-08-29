const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should set GitHub account with the constructor argument", () => {
            const testGithub = "username";
            const newEngineer = new Engineer("Foo", 1, "test@testing.com", testGithub);

            expect(newEngineer.github).toBe(testGithub);
        });

        it('should return "Engineer" when using the getPosition() method', () => {
            const testPosition = "Engineer";
            const newEngineer = new Engineer("Foo", 1, "test@testing.com", "username");

            expect(newEngineer.getPosition()).toBe(testPosition);
        });

        it("should get GitHub Username with the getGithub() method", () => {
            const testGithub = "username";
            const newEngineer = new Engineer("Foo", 1, "test@testing.com", testGithub);

            expect(newEngineer.getGithub()).toBe(testGithub);
        });
    });
});