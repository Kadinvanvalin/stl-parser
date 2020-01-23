const geo = require("./lib/Geo");
const stl = require("./lib/stlParser");
const IO = require("./lib/IO");

function runScript(stlFile) {
  const listOfTrianglePoints = stl.listOfTrianglePoints(stlFile);

  const lengthOfTriangleSides = listOfTrianglePoints.map(coord =>
    geo.trianglePointsToLengths(coord)
  );

  const boundingBox = geo.findBoundingBox(listOfTrianglePoints);

  const SurfaceAreaOfModel = lengthOfTriangleSides
    .map(coords => geo.sizeOfTriangleHeron(coords.a, coords.b, coords.c))
    .reduce((a, c) => a + c);

  console.log(
    ` Surface Area: ${SurfaceAreaOfModel}\n`,
    `Number of Triangles: ${stl.numberOfTriangles(stlFile)}\n`,
    "Bounding Box:",
    IO.boundingBoxRender(boundingBox)
  );
}

IO.askQuestion("What is the relative path to the file? ")
  .then(IO.read)
  .then(runScript);
