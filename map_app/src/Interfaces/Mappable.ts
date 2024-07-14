export default interface Mappable {
    getLocation: {
        lat: number,
        lng: number,
    }
    markerTitle: (adress: string ) => string;
}