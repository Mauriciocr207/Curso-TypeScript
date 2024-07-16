var Vehicle = /** @class */ (function () {
    function Vehicle(b, m, c) {
        this.brandName = b;
        this.model = m;
        this.color = c;
    }
    Vehicle.prototype.drive = function () {
        console.log("conduciendo un ".concat(this.brandName, ", modelo: ").concat(this.model, ", color: ").concat(this.color));
    };
    return Vehicle;
}());
var vehicle = new Vehicle("mazda", "2016", "white");
vehicle.brandName = "toyota";
vehicle.drive();
