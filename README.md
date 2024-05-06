# Update
```
1- Fix some problim
```
# Resorce
- [deno](https://deno.land/x/shapes_plus@v0.0.5)
- [npm](https://www.npmjs.com/package/shapes-plus)
- [github](https://github.com/hlever-1/shapes-plus)

# Compiling

If you want to know the details, go [here](https://www.npmjs.com/package/canvas)

OS | Command
----- | -----
OS X | Using [Homebrew](https://brew.sh/):<br/>`brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman`
Ubuntu | `sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev`
Fedora | `sudo yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel`
Solaris | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto`
OpenBSD | `doas pkg_add cairo pango png jpeg giflib`
Windows | See the [wiki](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows)
Others | See the [wiki](https://github.com/Automattic/node-canvas/wiki)

# Install
### npm
```
npm install shapes-plus --save
```

```javascript
// index.js
const { Shapes } = require("shapes-plus");
const shapes = new Shapes(/* options: ShapesOptions */);
```
or
```javascript
// index.js
import { Shapes } from "shapes-plus";
const shapes = new Shapes(/* options: ShapesOptions */);
```

# Values
Key | Type 
--- | ----
createCircle | method
createText | method
createImage | method
createLine | method
createRect | method
createRhombus | method
createStar | method
createTriangle | method
toBuffer | method
toSave | method
addFontFamily | method
Canvas | prototype
canvas | prototype
ctx | prototype 
# Rect
```javascript
const rect = shapes.createRect(/* options: RectOptions */);
rect.draw({x:200, y:100, color:"blue", drawType:"stroke"})
rect.draw({x:500, y:100, height:110, width:110});
```
![Rect](https://cdn.discordapp.com/attachments/716228498825412690/987693454387707924/unknown.png)
# Circle
```javascript
const circle = shapes.createCircle(/* options: CircleOptions */);
circle.draw({x:200, y:100, color:"blue", drawType:"stroke"});
circle.draw({x:500, y:100, radius:60});
```
![Circle](https://cdn.discordapp.com/attachments/716228498825412690/987693492606230538/unknown.png)
# Text
```javascript
const text = shapes.createText(/* options: TextOptions */);
text.draw({x:200, y:100, color:"blue", drawType:"stroke", text:"Hello"});
text.draw({x:500, y:100, text:"Hi", fontFamily:"Impact", size:60, textAlign:"left", width:70});
```
![Text](https://cdn.discordapp.com/attachments/716228498825412690/987693637255176262/unknown.png)
# Line
```javascript
const line = shapes.createLine(/* options: LineOptions */);
line.draw({x:200, y:100, endX:450, endY:100, color:"blue", lineWidth:3});
line.draw({x:200, y:150, endX:450, endY:150, lineWidth:5});
```
![Line](https://cdn.discordapp.com/attachments/716228498825412690/987693692238327808/unknown.png)
# Rhombus
```javascript
const rhombus = shapes.createRhombus(/* options: RhombusOptions */);
rhombus.draw({x:200, y:200, color:"blue", drawType:"stroke"});
rhombus.draw({x:500, y:200, height:80 ,width:90});
```
![Rhombus](https://cdn.discordapp.com/attachments/716228498825412690/987693537468510218/unknown.png)
# Star
```javascript
const star = shapes.createStar(/* options: StarOptions */);
star.draw({x:200, y:100, color:"blue", drawType:"stroke"});
star.draw({x:500, y:100, spikes:9, innerRadius:20, outerRadius:30});
```
![Star](https://cdn.discordapp.com/attachments/716228498825412690/987693591600181309/unknown.png)
# Image
```javascript
const image = shapes.createImage(/* options: ImageOptions */);
image.draw({x:200, y:500, height:120, width:120, path:"https://cdn.discordapp.com/attachments/716228498825412690/987695097107873792/unknown.png"}).then(async img=>
    {
        await image.draw({x:400, y:500, isCircle:true, radius:60, path:"https://cdn.discordapp.com/attachments/716228498825412690/987695097107873792/unknown.png"});
        await img.draw({x:600, y:500, height:100, width:100, path:"https://cdn.discordapp.com/attachments/716228498825412690/987695097107873792/unknown.png"});
        await img.draw({x:800, y:500, isCircle:true, radius:50, path:"https://cdn.discordapp.com/attachments/716228498825412690/987695097107873792/unknown.png"});
    });
```
![Image](https://cdn.discordapp.com/attachments/716228498825412690/987697674469920778/unknown.png)
# Triangle
```javascript
const triangle = shapes.createTriangle(/* options: TriangleOptions */);
triangle.draw({x:200, y:100, color:"red"});
triangle.draw({x:300, y:100, color:"blue", drawType:"stroke"});
triangle.draw({x:400, y:100, color:"green", rotate:70});
triangle.draw({x:200, y:200, color:"yellow", sideAB: 20, sideAC: 10});
triangle.draw({x:300, y:200, color:"pink", sideBC: 50, rotate:20});
```
![Triangle](https://cdn.discordapp.com/attachments/716228498825412690/1034169227910840450/unknown.png)
# Font Family
`Warning` If you use windows os you must add font family in your windows before use `addFontFamily`
```javascript
// Add new Font Family 
const { addFontFamily } = require("shapes-plus");
addFontFamily(/* path: string, setName: string */) // You can add any name in setName
```
Or
```javascript
// Add new Font Family 
import { addFontFamily } from "shapes-plus";
addFontFamily(/* path: string, setName: string */) // You can add any name in setName
```
for examlpe:
```javascript
addFontFamily("./Halimun.ttf","Halimun");

const text = shapes.createText();
text.draw({x:200, y:100, text:"Hello", fontFamily:"Halimun"});
text.draw({x:500, y:100, text:"Hello", fontFamily:"Impact"});
```
![font family](https://cdn.discordapp.com/attachments/716228498825412690/1034159213125046394/unknown.png)
# Other method
```javascript
// save Image
shapes.toSave(path); // path = "save local device without extension"

// convert to Buffer
shapes.toBuffer() // return Buffer
```
# One example in detail
```javascript
shapes.createRect(/*options*/).draw({x:500, y:100, color:"red"}).draw({x:700, y:100, color:"red"}).draw({x:900, y:100, color:"red"});
```
OR
```javascript
shapes.createRect({y:100, color:"red"}).draw({x:500}).draw({x:700}).draw({x:900});
```
OR
```javascript
const rect = shapes.createRect(/*options*/);
rect.draw({x:500, y:100, color:"red"});
rect.draw({x:700, y:100, color:"red"});
rect.draw({x:900, y:100, color:"red"});
```
OR
```javascript
const rect = shapes.createRect({color:"red", y:100});
rect.draw({x:500});
rect.draw({x:700});
rect.draw({x:900});
```
![draws](https://cdn.discordapp.com/attachments/716228498825412690/987690247745863750/unknown.png)
# Options

## ShapesOptions

Key | Type | Default
--- | ---- | ----- 
width? | Number | 1920
height? | Number | 1080
canvas? | Canvas | Canvas

## RectOptions

Key | Type | Default
--- | ---- | ----- 
x | Number | 0 
y | Number | 0 
color | String | black
drawType `draw` | String | fill
width | Number | 100
height | Number | 100

## CircleOptions
Key | Type | Default
--- | ---- | ----- 
x | Number | 0
y | Number | 0
color | String | black
drawType `draw` | String | fill
radius | Number | 50

## TextOptions
Key | Type | Default
--- | ---- | ----- 
x | Number | 0
y | Number | 0
color | String | black
drawType `draw` | String | fill
width | Number | 100
text | String | null
size | Number | 50
fontFamily | String | Arial

## LineOptions
Key | Type | Default
--- | ---- | ----- 
x | Number | 0
y | Number | 0
color | String | black
lineWidth | Number | 1
endX | Number | 50
endY | Number | 50

## RhombusOptions
Key | Type | Default
--- | ---- | ----- 
x | Number | 0
y | Number | 0
color | String | black
drawType `draw` | String | fill
width | Number | 100
height | Number | 100
lineWidth | Number | 1

## StarOptions
Key | Type | Default
--- | ---- | ----- 
x | Number | 0
y | Number | 0
color | String | black
drawType `draw` | String | fill
lineWidth | Number | 1 
spikes | Number | 5
outerRadius | Number | 30
innerRadius | Number | 15

## ImageOptions
Key | Type | Default
--- | ---- | ----- 
x | Number | 0
y | Number | 0
color | String | black
width | Number | 100
height | Number | 100
path | String | null

## TriangleOptions
Key | Type | Default
--- | ---- | ----- 
x | Number | 0
y | Number | 0
color | String | black
drawType `draw` | String | fill
sideAB?| number | 0
sideAC?| number | 0
sideBC?| number | 0
rotate?| number | 0