/**
 * PermCheck
 * https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
 * @param {number[]} A is an array (where each element is an integer within the range [1..1,000,000,000])
 */
function solution(A) {
    const N = A.length;
    const counters = {};
    // Why "Math.max.apply" ⤵ – https://bit.ly/31xo0Ss
    const maxValue = Math.max.apply(null, A);

    for (let i = 0; i < N; i++) {
        const currentValue = A[i];

        if (counters[currentValue]) {
            return 0;
        }
        counters[currentValue] = 1;
    }

    let count = 0;
    for (let i = 1; i <= maxValue; i++) {
        count = i;
        if (!counters[i]) {
            break;
        } 
    }

    return count === maxValue ? 1 : 0;
}

module.exports = solution;