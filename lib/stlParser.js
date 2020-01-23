const stlParser = {
  listOfTrianglePoints: simple => {
    const number = /vertex\s*(\S*)\s*(\S*)\s*(\S*)/g;
    const matches = simple.matchAll(number);
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
  numberOfTriangles: source => {
    return source.match(/facet normal/g).length;
  }
};

module.exports = stlParser;
