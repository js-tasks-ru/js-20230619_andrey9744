/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function compareFunction(a1, b1) {
	return a1.localeCompare(b1, ["ru-RU", "en-EN"], {caseFirst: 'upper'});
};
export function sortStrings(arr, param = "asc") {
    return [...arr].sort((a, b) => ((param === 'asc')? compareFunction(a, b): compareFunction(b, a)));
};