/**
 * CountDiv
 * https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
 * @param {number} A integers within the range [0..2,000,000,000]
 * @param {number} B integers within the range [0..2,000,000,000]
 * @param {number} K integers within the range [1..2,000,000,000]
 */
function solution(A, B, K) {
    let start = A;
    let count = A === 0 ? 1 : 0;

    if (A === B) {
        return A % K ? 0 : 1;
    }

    if (A < K) {
        start = K;
    }

    for (var i = start; i < B + 1; i++) {
        if (i % K === 0) {
            count += parseInt((B - i) / K) + 1;
            break;
        }
    }

    return count;
}

module.exports = solution;