# STL File Parser

### dependency 
  Node installed globally
### How to use
```bash
$ node index
```
You will then be prompted for the relative path of the stl ascii file you wish you parse, you can use a sample file from the samples folder. The parser will output the surface area, number of triangles and the bounding box.

```bash
$ What is the relative path to the file? samples/bottle.stl
 Surface Area: 9554.72504021138
 Number of Triangles: 1240
 Bounding Box: Low { x: -26.5748, y: 4.426, z: -13.6694 }, { x: 26.5269, y:90.2, z: 13.5885 }
```
