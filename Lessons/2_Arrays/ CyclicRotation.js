/**
 * 
 * @param {*} A 
 * @param {*} K 
 */
function solution(A, K) {
	const arrLen = A.length;
	const nbOfRotation = K % arrLen;

	if (nbOfRotation === 0) {
		return A;
	}

	const start = A.slice(-nbOfRotation);
	const end = A.slice(0, arrLen - nbOfRotation);

	return start.concat(end);
}

module.exports = solution;