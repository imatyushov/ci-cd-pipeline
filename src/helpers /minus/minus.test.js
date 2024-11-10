import { minus } from "./minus";


describe('minus', () => {
    test('positive', () => {
        expect(minus(10, 10).toBe(0));
    })

    test('negative', () => {
        expect(minus(-10, -10).toBe(0));
    })
})
