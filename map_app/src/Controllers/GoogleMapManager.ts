import Mappable from "../Interfaces/Mappable";
import GoogleMapGeoCoder from "./GoogleMapGeoCoder";
import SearchOptions from "../Interfaces/SearchOptinos";

export default class GoogleMapManager {
    private googleMap: google.maps.Map;
    private geoCoder: GoogleMapGeoCoder;

    constructor(divId: string) {
        const divMap = document.getElementById(divId)!;
        const { Map } = google.maps;
        this.googleMap = new Map(
            divMap as HTMLElement,
            {
                zoom: 1,
                center: {lat: 0, lng: 0},
                mapId: 'DEMO_MAP_ID'
            }
        );
        this.geoCoder = new GoogleMapGeoCoder(this.googleMap);
    }

    static async initialize(divId: string) {
        try {
            await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
            await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
            await google.maps.importLibrary("geocoding") as google.maps.GeocodingLibrary;
            
            return new GoogleMapManager(divId);
        } catch (err: any) {
            console.error(err.message); 
        }
    }

    async addMarker(mappable: Mappable) {
        try {
            const { marker: {AdvancedMarkerElement}, InfoWindow } = google.maps;

            const marker = new AdvancedMarkerElement({
                map: this.googleMap,
                position: {
                    lat: mappable.getLocation.lat,
                    lng: mappable.getLocation.lng,
                }
            });

            const formatted_address = await this.geoCoder.getMarkerInfo(marker);
            
            if(!formatted_address) throw Error('no direction');

            const infoWindow = new InfoWindow({
                content: mappable.markerTitle(formatted_address),
            });

            marker.addListener('click', () => {
                infoWindow.open(this.googleMap, marker);
            });
        } catch (error:any) {
            window.alert(error.message);
        }
    }

    prepareForSearchUbi(options: SearchOptions) {
        options.searchBtn.addEventListener('click', async () => {
            const location = await this.geoCoder.getDirection(options.input.value);

            if(!location) throw Error('no location found');

            this.googleMap.setCenter(location);
            this.googleMap.setZoom(16);
            
            new google.maps.marker.AdvancedMarkerElement({
                map: this.googleMap,
                position: location,
            });
        })
    }
}