export interface Mappble {
    location: {
        lat: number,
        lng: number
    };
    addContentMarker(): string;
    color: string;
}

export class CustomMap {

    private googleMap: google.maps.Map;

    constructor(mapDivId: string) {

        this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });

    }

    addMarker(mappable: Mappble): void {

        const infowindow = new google.maps.InfoWindow({
            content: mappable.addContentMarker(),
        });

        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click',() => {
            infowindow.open(this.googleMap,marker);
        })

    }

}



