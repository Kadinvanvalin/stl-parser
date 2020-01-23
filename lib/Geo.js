const Geo = {
  validTriangle: (a, b, c) => {
    const sides = [a, b, c];
    if (sides.length !== 3)
      throw new Error("validTriangle input must have a length of 3");
    sides.sort((a, b) => a - b);
    return sides[0] + sides[1] > sides[2];
  },
  sizeOfTriangleHeron: (a, b, c) => {
    if (!Geo.validTriangle(a, b, c)) throw Error("invalid triangle found");
    const s = (a + b + c) / 2;
    const result = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    if (Number.isNaN(result)) throw Error("NaN found");
    return result;
  },
  findBoundingBox: (
    listOfTriangles,
    boundingBox = [
      listOfTriangles[0], // low bounding box,
      listOfTriangles[0] // high bounding box
    ]
  ) => {
    if (Array.isArray(listOfTriangles) && !listOfTriangles.length)
      return boundingBox;
    const [head, ...tail] = listOfTriangles;
    const newBoundingBox = Geo.check(head, boundingBox);
    return Geo.findBoundingBox(tail, newBoundingBox);
  },
  check: (triangle, boundingBox) => {
    if (Array.isArray(triangle) && !triangle.length) return boundingBox;
    const [head, ...tail] = triangle;
    const newBox = [
      boundingBox[0].map((point, index) =>
        point < head[index] ? point : head[index]
      ),
      boundingBox[1].map((point, index) =>
        point > head[index] ? point : head[index]
      )
    ];
    return Geo.check(tail, newBox);
  },
  distanceBetweenTwoPoints: (x, y, z, x2, y2, z2) => {
    const result = Math.sqrt(
      Math.pow(x - x2, 2) + Math.pow(y - y2, 2) + Math.pow(z - z2, 2)
    );
    return result;
  },
  trianglePointsToLengths: coord => {
    return {
      a: Geo.distanceBetweenTwoPoints(...coord[0], ...coord[1]),
      b: Geo.distanceBetweenTwoPoints(...coord[1], ...coord[2]),
      c: Geo.distanceBetweenTwoPoints(...coord[2], ...coord[0])
    };
  }
};

module.exports = Geo;
