/**
 * MissingInteger
 * https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
 * @param {number[]} A is an array (where each element is an integer within the range [−1,000,000..1,000,000])
 */
function solution(A) {
	const N = A.length;
	const counters = {};
	let maxValue = 1;

	for (let i = 0; i < N; i++) {
		const currentValue = A[i];

		if (currentValue > 0) {
			if (maxValue < currentValue) {
				maxValue = currentValue;
			}
			counters[currentValue] ? counters[currentValue]++ : counters[currentValue] = 1;
		}
	}

	for (let i = 1; i <= maxValue; i++) {
		if (!counters[i]) {
			return i;
		} 
	}

	return maxValue + 1;
}

module.exports = solution;