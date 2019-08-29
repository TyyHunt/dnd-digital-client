class Api::RacesController < ApplicationController

  def index
    render json: Race.all
  end
  
end
