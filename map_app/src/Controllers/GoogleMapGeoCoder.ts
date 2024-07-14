export default class GoogleMapGeoCoder {
    private map: google.maps.Map;
    private goecoder: google.maps.Geocoder;

    constructor(map: google.maps.Map) {
        this.map = map;
        this.goecoder = new google.maps.Geocoder();
    }

    async getMarkerInfo(
        marker: google.maps.marker.AdvancedMarkerElement,
    ) : Promise<string | undefined> {
        try {                
            const { results } = await this.goecoder.geocode({
                location: marker.position!
            });

            if(!results || results.length === 0) {
                throw Error('No results');
            }
            
            const [{formatted_address}] = results;

            return formatted_address;
        } catch (error: any) {
            window.alert(error.message);
        }
    }

    async getDirection(
        address: string
    ): Promise<google.maps.LatLng | undefined> {
        try {
            const { results } = await this.goecoder.geocode({address});
            const [{geometry: {location}}] = results;
            return location;
        } catch (error: any) {
            window.alert(error.message);
        }
    }
}