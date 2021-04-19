import chunks from './chunks';

describe('chunks.util', () => {
    it('should chunk an array', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = chunks(array, 3);
        const [c1, c2, c3, c4] = result;

        expect(result.length).toBe(4);
        expect(c1).toEqual([1, 2, 3]);
        expect(c2).toEqual([4, 5, 6]);
        expect(c3).toEqual([7, 8, 9]);
        expect(c4).toEqual([10]);
    });
});
