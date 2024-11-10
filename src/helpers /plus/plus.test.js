import {plus} from "./plus";


describe('plus', () => {
    test('positive', () => {
        expect(plus(10, 10)).toBe(20);
    })
    test('negative', () => {
        expect(plus(-10, -10)).toBe(-20);
    })
})
