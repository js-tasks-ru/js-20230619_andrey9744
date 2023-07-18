/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = "asc") {
    return [...arr].sort((a, b) => ((param === 'asc')? a.localeCompare(b, ["ru-RU", "en-EN"], {caseFirst: 'upper'}): b.localeCompare(a, ["ru-RU", "en-EN"], {caseFirst: 'upper'})));
  };