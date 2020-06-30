/**
 * PassingCars
 * https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
 * @param {number[]} A is an array (where each element is an integer that can have one of the following values: 0, 1)
 */
function solution(A) {
	const N = A.length;
	let countPairs = 0;
	
	let totalWest = 0; // Q
	for (let i = 0; i < N; i++) {
		totalWest += A[i];
	}
	let totalEast = N - totalWest;

	for (let i = 0; i < N; i++) {
		currentValue = A[i];
		if (currentValue === 1) {
			totalWest--;
			continue;
		}

		countPairs += totalWest;

		if (countPairs > 10e8) {
			return -1;
		}
	}
	
	return countPairs;
}

module.exports = solution;