export interface Mappable {
    location: {
        lat: number,
        lng: number
    }

    displayContent(): string;
}

export class CustomMap {
    private googleMaps: google.maps.Map

    constructor(divId: string) {
        this.googleMaps = new google.maps.Map(document.getElementById(divId), {
            zoom: 3,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMaps,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.displayContent()
            });
            infoWindow.open(this.googleMaps, marker);
        })

    }
}

