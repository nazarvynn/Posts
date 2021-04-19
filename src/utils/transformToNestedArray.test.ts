import transformToNestedArray from './transformToNestedArray';

describe('transformToNestedArray.util', () => {
    const data = [
        { user: 'Andy', age: 25 },
        { user: 'Smith', age: 45 },
    ];

    it('should transform to nested array', () => {
        expect(transformToNestedArray(data)).toEqual([
            [1, 'Andy', 25],
            [2, 'Smith', 45],
        ]);
    });
});
