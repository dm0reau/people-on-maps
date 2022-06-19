import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["geolocation", "lat", "lng"]

  geolocation() {
    const geolocationTargetOriginText = this.geolocationTarget.textContent.trim();
    this.geolocationTarget.innerText = "Loading geolocation...";
    navigator.geolocation.getCurrentPosition(position => {
      this.latTarget.value = position.coords.latitude
      this.lngTarget.value = position.coords.longitude
      this.geolocationTarget.innerText = geolocationTargetOriginText
    }, () => this.geolocationTarget.innerText = geolocationTargetOriginText)
  }
}
