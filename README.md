# node-mach3-api
Mach3 CNC Software Interface for Nodejs. 

# Installation
Run Mach3Registry.reg as administrator in order to use Mach3 SDK.

# Useage
Functions:
    getCoordinates(null) --> needs empty parameter
    getOEMDRO(int number)

```
//get current X offset
mach3.getOEMDRO(800, (error, data) => {
    if (error) throw error;
    console.log(data);
});
```