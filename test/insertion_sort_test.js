import assert from 'assert';
import { insertion_sort } from '../impl';

describe('Algorithms', function() {
    describe('#insertion_sort', function() {
        it('should return sorted array', function() {
            let array = [31,41,59,26,41,58];
            insertion_sort(array);
            assert.deepEqual(array, [26,31,41,41,58,59]);
        });
    });
});
