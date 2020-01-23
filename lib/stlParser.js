const stlParser = {
  listOfTrianglePoints: source => {
    const number = /vertex\s*(\S*)\s*(\S*)\s*(\S*)/g;
    const matches = source.matchAll(number);
    const triangles = [];

    for (const match of matches) {
      triangles.push([+match[1], +match[2], +match[3]]);
    }
    const n = 3;
    return triangles.reduce(
      (r, e, i) => (i % n ? r[r.length - 1].push(e) : r.push([e])) && r,
      []
    ); // =>   [ [ 0, 0, 0 ], [ 1, 0, 1 ], [ 0, 0, 1 ] ], [ [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 1, 1 ] ],
  },
};

module.exports = stlParser;
