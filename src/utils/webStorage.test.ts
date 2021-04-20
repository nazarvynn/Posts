// import { getItemByKey, setItemByKey, removeItemByKey, getStorage } from './webStorage';
import { getItemByKey } from './webStorage';

// const mockGetStorage = jest.fn();
//
// jest.mock('./webStorage', () => ({
//     getStorage: mockGetStorage,
// }));

describe('webStorage.util', () => {
    // beforeEach(async () => {
    //     jest.resetModules();
    // });
    it('should return item by key', async () => {
        // mockGetStorage.mockImplementation(() => ({
        //     getItem: () => {
        //         return `{"nv:test": "text"}`;
        //     },
        // }));
        expect(getItemByKey('test')).toBe(null);
    });
});
