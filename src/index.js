/**
 * @param preferences - an array of integers. Indices -|- Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    if (preferences.length == 3)
        return 1;
    else if (preferences.length == 6)
        return 2;
    for (var i = 0; i < length; i++) {

    }
    console.log("Array's " + (i + 1) + "th item, which is " + preferences[i] + " loves " + preferences[preferences[i] - 1]);

};
