import formatDate from './formatDate';

describe('formatDate.util', () => {
    it('should format date', () => {
        const timestamp = 1618836305793;

        expect(formatDate(timestamp)).toBe('April 19, 2021');
    });
});
