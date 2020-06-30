/**
 * FrogRiverOne
 * https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
 * @param {number} X integer within the range [1..100,000]
 * @param {number[]} A is an array (where each element is an integer within the range [1..X])
 */
function solution(X, A) {
	const N = A.length;
	const steps = {};
	let found = false;
	let count = X - 1;

	for (var i = 1; i < X; i++) {
		steps[i] = 1;
	}

	for (let i = 0; i < N; i++) {
		if (A[i] in steps && steps[A[i]] === 1) {
			steps[A[i]] = 0;
			--count;
		}
		if (A[i] === X) {
			found = true;
		}
		if (found && count === 0) {
			return i;
		}
	}
	
	return -1;
}

module.exports = solution;