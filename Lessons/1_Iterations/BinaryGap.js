/**
 * BinaryGap
 * @param {*} N 
 */
function solution(N) {
    const decimalToBinary = dec => (dec >>> 0).toString(2);

    const result = Math.max(
        ...decimalToBinary(N)
        .split('1')
        .map(cur => cur.length)
        .slice(1, -1)
    );

    return isFinite(result) ? result : 0;
}

module.exports = solution;