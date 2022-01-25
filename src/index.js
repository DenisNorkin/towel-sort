module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 1) {
        let e = matrix[i].reverse()
        for (let k = 0; k < e.length; k++) {
          arr.push(e[k]);
        }
      } 
      else {
        for (let k = 0; k < matrix[i].length; k++) {
          arr.push(matrix[i][k]);
        }
      }
    }
    return arr;
  } 
  else {
    return [];
  }
}
