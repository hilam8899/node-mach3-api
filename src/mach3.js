var edge = require('edge-js');
var sdk = __dirname + '/Interop.Mach4.dll';

var getCoordinates = edge.func({
    source: function() {
        /*
            using System.Threading.Tasks;
            using System.Runtime.InteropServices;
            using Mach4;

            public class Startup
            {
                IMach4 mach3;
                IMyScriptObject mach3Inst;

                public class Coords
                {
                    public Position machine { get; set; }
                    public Position work { get; set; }

                }

                public class Position
                {
                    public double x { get; set; }
                    public double y { get; set; }

                }

                public async Task<object> Invoke(object input)
                {
                    mach3 = (IMach4)Marshal.GetActiveObject("Mach4.Document");
                    mach3Inst = (IMyScriptObject)mach3.GetScriptDispatch();

                    Coords coords = new Coords();
                    coords.machine = new Position();
                    coords.work = new Position();

                    coords.machine.x = mach3Inst.GetOEMDRO(83);
                    coords.machine.y = mach3Inst.GetOEMDRO(84);
                    coords.work.x = mach3Inst.GetOEMDRO(800);
                    coords.work.y = mach3Inst.GetOEMDRO(801);
                    return coords;
                }
            }

        */
    },
    references: [sdk],
});

var getOEMDRO = edge.func({
    source: function() {
        /*
            using System;
            using System.Threading.Tasks;
            using System.Runtime.InteropServices;
            using Mach4;

            public class Startup
            {
                IMach4 mach3;
                IMyScriptObject mach3Inst;

                public async Task<object> Invoke(object input)
                {
                    mach3 = (IMach4)Marshal.GetActiveObject("Mach4.Document");
                    mach3Inst = (IMyScriptObject)mach3.GetScriptDispatch();

                    var value = mach3Inst.GetOEMDRO(Convert.ToInt16(input));
                    return value;
                }
            }

        */
    },
    references: [sdk],
});



module.exports = {
    getCoordinates,
    getOEMDRO
}