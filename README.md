# node-mach3-api
Mach3 CNC Software Interface for Nodejs. 
<br>Uses edge-js for accessing Mach3 SDK.

# Installation
Run Mach3Registry.reg as administrator in order to use Mach3 SDK.

# Useage
Functions:
    <ul>
    <li>getCoordinates(null): Returns object of machine and work position</li>
    <li>getOEMDRO(int number): Returns value of given DRO</li>
    <li>getGCode(null): Returns loaded gCode as array of lines</li>
    </ul>

Example:

```Javascript
var mach3 = require("./src/mach3");

//get machine + work coordinates
mach3.getCoordinates(null, (error, data) => {
    if (error) throw error;
    console.log(data);
});

//get current X offset (DRO 800)
mach3.getOEMDRO(800, (error, data) => {
    if (error) throw error;
    console.log(data);
});

//get gCode
mach3.getGCode(null, (error, data) => {
    if (error) throw error;
    console.log(data);
});
```