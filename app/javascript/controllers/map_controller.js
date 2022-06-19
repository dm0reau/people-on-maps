import {Controller} from "@hotwired/stimulus";
import {Loader} from "@googlemaps/js-api-loader";
import {MarkerClusterer} from "@googlemaps/markerclusterer";

export default class extends Controller {
    static values = {people: Array, googleMapsApiKey: String};

    async initialize() {
        await this.loadGoogleMaps();
        this.loadMap();
        const markers = this.addPeopleMarkers();
        this.addMarkersClusters(markers);
    }

    addPeopleMarkers() {
        return this.peopleValue
            .filter(person => person.lat && person.lng)
            .map((person) => {
                const personFullName = `${person.firstname} ${person.lastname}`;

                const marker = new this.googleMaps.Marker({
                    position: {
                        lat: person.lat, lng: person.lng,
                    }, map: this.map,
                });

                this.addInfoWindow(marker, `<p>${personFullName}</p>`);

                return marker;
            });
    }

    addMarkersClusters(markers) {
        new MarkerClusterer({map: this.map, markers});
    }

    addInfoWindow(marker, content) {
        const infoWindow = new this.googleMaps.InfoWindow({
            content,
        });

        marker.addListener("click", () => {
            infoWindow.open({
                anchor: marker, map: this.map, shouldFocus: false,
            });
        });
    }

    async loadGoogleMaps() {
        const loader = new Loader({
            apiKey: this.googleMapsApiKeyValue, version: "weekly",
        });
        const google = await loader.load();
        this.googleMaps = google.maps;
    }

    loadMap() {
        const france = {lat: 47.0780882, lng: 2.3632786};
        this.map = new this.googleMaps.Map(this.element, {
            zoom: 6, center: france,
        });
    }
}
