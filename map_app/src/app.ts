import Driver from "./Models/Driver";
import GoogleMapManager from "./Controllers/GoogleMapManager";
import Passenger from "./Models/Passenger";
import MyHome from "./Models/MyHome";

(async () => {
    try {
        const mapManager = await GoogleMapManager.initialize("map");

        if(!mapManager) throw Error('no initialized map');

        const passenger = new Passenger();
        const driver = new Driver();
        const myHome = new MyHome(passenger);

        mapManager.addMarker(passenger);
        mapManager.addMarker(driver);
        mapManager.addMarker(myHome);
        mapManager.prepareForSearchUbi({
            input: <HTMLInputElement>document.getElementById('address'),
            searchBtn: <HTMLButtonElement>document.getElementById('searchBtn')
        });
    } catch (err: any) {
        console.error(err.message);
    }
})();