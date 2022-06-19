class MapsController < ApplicationController
  def index
    @people = Person.all
    @google_maps_api_key = Rails.configuration.google_maps.api_key
  end
end
