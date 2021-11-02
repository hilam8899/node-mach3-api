var mach3 = require("./src/mach3");

mach3.getCoordinates(null, (error, data) => {
    if (error) throw error;
    console.log(data);
});

mach3.getOEMDRO(800, (error, data) => {
    if (error) throw error;
    console.log(data);
});

mach3.getGCode(null, (error, data) => {
    if (error) throw error;
    console.log(data);
});