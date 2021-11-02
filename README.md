# node-mach3-api
<br>Mach3 CNC Software Interface for Nodejs. 
<br>Uses edge-js for accessing Mach3 SDK.

# Installation
Run Mach3Registry.reg as administrator in order to use Mach3 SDK.

# Useage
Functions:
    <ul>
    <li>getCoordinates(null) </li>
    <li>getOEMDRO(int number)</li>
    </ul>

Example:

```Javascript
//get current X offset
var mach3 = require("./src/mach3");

mach3.getOEMDRO(800, (error, data) => {
    if (error) throw error;
    console.log(data);
});
```