import { multiple } from "./multiple";

describe('multiple', function () {
    test('positive', () => {
        expect(multiple(5, 5)).toBe(25);
    })
});
